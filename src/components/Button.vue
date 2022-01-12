<template>
  <button class="c-button">
    <span v-if="this.text">{{this.text}}</span>
    <Icon v-if="icon" :content="icon" />
  </button>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'Button',
  props: {
    text: String,
    icon: String
  },
  components: {
    Icon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .c-button {
        min-height: 32px;
        min-width: 32px;
    }
</style>
