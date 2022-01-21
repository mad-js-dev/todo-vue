<template>
    <div class="c-sortable-list"
        draggable
        @dragstart="parentStart"
        @dragover="parentOver"
        @drop="parentDrop">
    <div class="c-sortable-list__head">
        <slot></slot>
    </div>
        <div>
            <div class="c-sortable-list__ruler c-sortable-list__ruler--hidden"></div>
            <Task 
                v-for="(task, i) in computedTasks"
                :id="'p-main__draggable--' + i"
                :class="(draggedId != null && targetId == i)?'p-main__draggable p-main__draggable--highlight':'p-main__draggable'"
                :key="i"
                v-model="computedTasks[i]"
            />
        </div>
    </div>
</template>

<script>
import Task from '../02-Organisms/Task.vue'

export default {
  name: 'SortableList',
  components: {
    Task
  },
  props: {
    content: Array
  },
  data: function() {
      return {
          draggedId: null,
          targetId: null,
          animationTriggered: null,
          overId: null,
          draggedElement: null,
          lastOverElement: null,
          mainSelector: '.c-sortable-list',
          draggableSelector: '.p-main__draggable',
          dragableStateClassName: 'c-sortable-list__dragable--hidden',
          rulerSelector: '.c-sortable-list__ruler',
          rulerStateClassName: 'c-sortable-list__ruler--hidden' 
      }
  },
  methods: {
    startDrag (evt) {
        let elem = evt.target.closest(this.draggableSelector)
        let ruler = elem.parentNode.querySelector(this.rulerSelector)
        let id = elem.id.substring(19)
        
        elem.classList.add(this.dragableStateClassName)
        this.draggedElement = elem;
        ruler.classList.remove(this.rulerStateClassName)

        console.log('drag start', elem, id, elem.parentNode, elem.parentNode.querySelector('.c-sortable-list__ruler'))
        this.draggedId = id;
        var img = document.createElement("img");
        // img.src = "";
        evt.dataTransfer.setDragImage(img, 0, 0);
        evt.preventDefault();

        // evt.dataTransfer.effectAllowed = 'move'
    },
    cardOver (evt) {
        let elem = evt.target.closest('.p-main__draggable')
        if(elem!=null) {
            let base = elem.closest(this.mainSelector);
            let ruler = base.querySelector(this.rulerSelector);
            
            if(this.animationTriggered) {
                this.animationTriggered = true;
    
                elem.classList.add(this.dragableStateClassName)
                ruler.classList.remove(this.rulerStateClassName)
    
            }
        }
    },
    cardLeave (evt) {
        console.log(evt)
    },
    cardDrop (evt) {
        let elem = evt.target.closest('.p-main__draggable')
        let base = elem.closest(this.mainSelector);
        let ruler = base.querySelector(this.rulerSelector);
        this.$emit('reorder', {from: this.draggedId, to: this.overId})
        console.log('drop event', this.draggedElement)
        this.draggedElement.classList.remove(this.dragableStateClassName)
        ruler.classList.remove(`.${this.rulerStateClassName}`)
        this.targetId = null;
        this.draggedId = null;
        this.overId = null;
        this.animationTriggered = null;

    },
    parentStart(evt) {
        var img = document.createElement("img");
        var x = evt.clientX, y = evt.clientY,
        elementMouseIsOver = document.elementFromPoint(x, y);
        
        let elem = elementMouseIsOver.closest(this.draggableSelector);
        let ruler = elem.parentNode.querySelector(this.rulerSelector);
        let id = elem.id.substring(19)
        this.draggedId = id;
        this.draggedElement = elem;

        evt.dataTransfer.setDragImage(img, 0, 0);
        
        elem.classList.add(this.dragableStateClassName)
        ruler.classList.remove(this.rulerStateClassName)
    },
    parentOver(evt) {
        let x = evt.clientX, y = evt.clientY,
        elementMouseIsOver = document.elementFromPoint(x, y);
        let base = elementMouseIsOver.closest(this.mainSelector);
        let ruler = base.querySelector(this.rulerSelector);

        if(elementMouseIsOver.closest(this.draggableSelector)) {
            let id = elementMouseIsOver.closest(this.draggableSelector).id.substring(19);
            base.querySelectorAll(this.draggableSelector).forEach((node, ind) => {
                if(ind == id) {
                    this.lastOverElement = node;
                    this.overId = id
                    if(node.nextSibling == null) {
                        node.parentNode.appendChild(ruler)
                    } else {
                        node.parentNode.insertBefore(ruler, node.nextSibling)
                    }
                    ruler.classList.remove(this.rulerStateClassName)
                }
            })
        }
        evt.preventDefault();
    },
    parentDrop(evt) {
        this.$emit('reorder', {from: this.draggedId, to: this.overId})
        let elem;
        if(evt.target.classList.contains(this.dragableStateClassName)) {
            elem = evt.target.querySelector(`.${this.dragableStateClassName}`);
        } else {
            elem = evt.target.closest(this.draggableSelector);
        }
        let id = elem.id.substring(19)

        let base = elem.closest(this.mainSelector);
        let hidden = base.querySelector(`.${this.dragableStateClassName}`); 
        let ruler = base.querySelector(this.rulerSelector);
        console.log(this.lastOverElement);
        
        console.log(hidden, id)
        hidden.classList.remove(this.dragableStateClassName)
        ruler.classList.add(this.rulerStateClassName)
        
        this.draggedId = null;
        this.overId = null;
    },
  },
  computed: {
    computedTasks() {
      return this.content
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .p-main__draggable--highlight {
        border: green solid 1px;
    }

    .c-sortable-list__dragable {
        transform: rotateY(0) scaleY(1);
        transition: all 1s;
        transform-origin: top center;
    }

    .c-sortable-list__dragable--hidden {
        transform: rotateY( -6deg ) scaleY(0);
        transform-origin: top center;
        height: 0px;
        padding: 0;
        margin: 0;
        transition: all 1s;
    }
    .c-sortable-list__ruler {
        border-bottom: 5px solid green;
        margin: 10px 0;
    }

    .c-sortable-list__ruler--hidden {
        opacity: 0;
    }
</style>