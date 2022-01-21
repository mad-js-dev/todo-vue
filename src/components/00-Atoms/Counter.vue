<template>
  <p class="c-counter">{{size}}</p>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    value: String,
    limit: String
  },
  computed: {
    size() {
        // If there's no max, or we update the component to add magnitudes,
        // this is the place where use cases should be accounted for
      return `${this.value} / ${this.limit}`
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
