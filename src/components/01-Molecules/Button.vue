<template>
  <button class="c-button">
    <span v-if="this.text">{{this.text}}</span>
    <Icon v-if="icon" :content="icon" />
  </button>
</template>

<script>
import Icon from '../00-Atoms/Icon.vue'

export default {
  name: 'Button',
  components: {
    Icon
  },
  props: {
    text: String,
    icon: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .c-button {
        min-height: 32px;
        min-width: 32px;
    }
</style>
