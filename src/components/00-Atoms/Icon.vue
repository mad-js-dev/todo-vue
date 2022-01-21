<template>
  <span :class="'c-icon ' + content"></span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    content: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .c-icon {
    display: inline-block;
    min-height: 1em;
    content: ' '
  }
</style>
