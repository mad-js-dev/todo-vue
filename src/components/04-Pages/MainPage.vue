<template>
  <div class="p-main">
    <h1>
      To Do <Icon content="icon-heart" />
    </h1>
    <SortableList 
      :content="orderBy"
      @reorder="reorder"
    >
      <Button :text="cta.text" :icon="cta.icon" @click.native="addTask"/>
      <!-- Id be nice to have a order by select here -->
    </SortableList>
  </div>
</template>

<script>
import Icon from '../00-Atoms/Icon.vue'
import Button from '../01-Molecules/Button.vue'
import SortableList from '../03-Templates/SortableList.vue'

export default {
  name: 'MainPage',
  components: {
    Icon, Button, SortableList
  },
  data: function () {
     return {
       cta: {
         text: 'Add new task',
         icon: 'icon-plus'
       },
       tasks: [
         {
           date: 1641905323181,
           content: '4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis velit non massa pretium, in ullamcorper lacus sagittis. Phasellus ac diam condimentum, aliquet lectus eget, vulputate nunc. Donec nec arcu lobortis, placerat sapien et, auctor purus. Donec eget lacus eget leo ullamcorper ultrices quis eu lectus.',
           order: 3,
         },{
           date: 1641905323182,
           content: '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis velit non massa pretium, in ullamcorper lacus sagittis. Phasellus ac diam condimentum, aliquet lectus eget, vulputate nunc. Donec nec arcu lobortis, placerat sapien et, auctor purus. Donec eget lacus eget leo ullamcorper ultrices quis eu lectus.',
           order: 2,
         },{
           date: 1641905323183,
           content: '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis velit non massa pretium, in ullamcorper lacus sagittis. Phasellus ac diam condimentum, aliquet lectus eget, vulputate nunc. Donec nec arcu lobortis, placerat sapien et, auctor purus. Donec eget lacus eget leo ullamcorper ultrices quis eu lectus.',
           order: 1,
         },{
           date: 1641905323184,
           content: '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis velit non massa pretium, in ullamcorper lacus sagittis. Phasellus ac diam condimentum, aliquet lectus eget, vulputate nunc. Donec nec arcu lobortis, placerat sapien et, auctor purus. Donec eget lacus eget leo ullamcorper ultrices quis eu lectus.',
           order: 0,
         }
       ]
     }
  },
  props: {
    msg: String
  },
  methods: {
    reorder(data) {
      console.log('fy', data)
      let node = this.tasks[data.from];
      this.tasks.splice(data.from, 1)
      this.tasks.splice(data.to, 0, node);
      
      /*this.tasks.forEach(element => {
        
        if(element.order == data.from) {
          // console.log('...', element.order , element.order == data.from, element.order == data.to)
          element.order = Number.parseInt(data.to, 10)
        }

        if(element.order == data.to) {
          // console.log('...', element.order , element.order == data.from, element.order == data.to)
          element.order = Number.parseInt(data.from)
        }
      });*/
    },
    addTask() {
      console.log(this.tasks)
      this.tasks.forEach(element => {
        element.order++
      });
      
      this.tasks.unshift({
           date: Date.now(),
           content: '',
           order: 0
         })
    },
  },
  computed: {
    orderBy() {
      let result = [...this.tasks]
      /*let orderField = 'order';
      
      switch(orderField) {
        case 'order':
        case 'date':
          result.sort((a,b) => { 
            if(a[orderField] > b[orderField]) return 1
            if(a[orderField] < b[orderField]) return -1
            return 0
          });
      }*/

      return result;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
