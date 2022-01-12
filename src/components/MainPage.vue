<template>
  <div>
    <h1>
      To Do <Icon content="icon-heart" />
    </h1>
    <Button :text="cta.text" :icon="cta.icon" @click.native="addTask"/>
    <div>
      <Task 
        v-for="(task, i) in tasks" 
        v-model="tasks[i]"
        v-bind:key="task.date"
      />
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue'
import Button from './Button.vue'
import Task from './Task.vue'

export default {
  name: 'MainPage',
  components: {
    Icon, Button, Task
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
           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis velit non massa pretium, in ullamcorper lacus sagittis. Phasellus ac diam condimentum, aliquet lectus eget, vulputate nunc. Donec nec arcu lobortis, placerat sapien et, auctor purus. Donec eget lacus eget leo ullamcorper ultrices quis eu lectus.'
         },{
           date: 1641905323182,
           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis velit non massa pretium, in ullamcorper lacus sagittis. Phasellus ac diam condimentum, aliquet lectus eget, vulputate nunc. Donec nec arcu lobortis, placerat sapien et, auctor purus. Donec eget lacus eget leo ullamcorper ultrices quis eu lectus.'
         },{
           date: 1641905323183,
           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis velit non massa pretium, in ullamcorper lacus sagittis. Phasellus ac diam condimentum, aliquet lectus eget, vulputate nunc. Donec nec arcu lobortis, placerat sapien et, auctor purus. Donec eget lacus eget leo ullamcorper ultrices quis eu lectus.'
         },{
           date: 1641905323184,
           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis velit non massa pretium, in ullamcorper lacus sagittis. Phasellus ac diam condimentum, aliquet lectus eget, vulputate nunc. Donec nec arcu lobortis, placerat sapien et, auctor purus. Donec eget lacus eget leo ullamcorper ultrices quis eu lectus.'
         }
       ]
     }
  },
  props: {
    msg: String
  },
  methods: {
    updateData() {
      console.log('trololo')
    },
    addTask() {
      console.log(this.tasks)
      this.tasks.unshift({
           date: Date.now(),
           content: ''
         })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
