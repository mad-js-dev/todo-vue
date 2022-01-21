<template>
  <div :class="(state.isOpen)?'c-task c-task--is-open': 'c-task'">
    <div>
        <span>{{time}}</span>

        <Button 
            v-if="state.isOpen" 
            class="c-task__edit"
            :icon="(!state.isUpdating)?'icon-pencil':'icon-floppy'" 
            @click.native="cardEditEvent"
        />
    </div>
    <p v-if="!state.isUpdating">
        {{$attrs['value'].content}}
    </p>
     <p v-else>
        <TextArea 
            v-bind:content="$attrs['value'].content"
            v-on:update="updateValue"
            limit="350" />
    </p>

    <div class="c-task__component-toggle" @click="cardToggleEvent">
        <div class="c-task__component-cta">
            <Icon content="icon-cancel" @click="cardToggleEvent" />
        </div>
    </div>
  </div>
</template>

<script>
import Button from '../01-Molecules/Button.vue'
import Icon from '../00-Atoms/Icon.vue'
import TextArea from '../01-Molecules/TextArea.vue'

export default {
    name: 'Task',
    components: {
        Button, Icon, TextArea
    },
    data: function () {
        return {
            state: {
                isOpen: (!this.$attrs['value'].content) ? true: false,
                isUpdating: false
            }
        }
    },
    computed: {
        time() {
            let duration = this.$attrs['value'].date - Date.now() 
            let result = Math.floor((duration / (1000 * 60 * 60)) % 24) * -1  + ' hours ago';
            if(duration * -1 <= 1000) result = 'Recently';
            return result;
        }
    },
    methods: {
        cardToggleEvent() {
            if(!this.state.isUpdating) this.state.isOpen = !this.state.isOpen;   
        },
        cardEditEvent() {
            this.state.isUpdating = !this.state.isUpdating;
        },
        updateValue(value) {
            this.$attrs['value'].content = value;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .c-task {
        border: 1px solid #CCC;
        padding: 10px 10px 30px 10px ;
        margin: 10px 0;
        max-height: 100px;
        overflow: hidden;
        position: relative;
    }

    .c-task:not(.c-task--is-open) .c-task__component-toggle {
        height: 120px;
    }

    .c-task .c-task__component-toggle {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 30px;
        z-index: 1;
        width: 100%;
    }

    .c-task .c-task__component-cta {
        display: block;
        width: 100%;
        content: '';
        background: none;
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
        height: 30px;
        background-color: #CCC;
        color: #FFF;
    }

    .c-task:not(.c-task--is-open) .c-task__component-cta {
        background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
        height: 80px;
    }
    .c-task .c-task__component-cta .c-icon {
        padding-top: 5px;
    }

    .c-task:not(.c-task--is-open) .c-task__component-cta .c-icon {
        display: none;
    }

    .c-task--is-open {
        max-height: 100%;
    }

    .c-task__edit {
        float: right;
    }

    .c-task__dragarea {

        display: inline-block;
        min-width: 32px;
        min-height: 32px;
    }

</style>
