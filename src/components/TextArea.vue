<template>
  <div class="c-textarea">
    <p>{{size}}</p>
    <textarea v-model="data" @keyup="updateCounter" :class="(counter==limit)?'c-textarea--full':''"></textarea>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    content: String
  },
  data: function() {
    return {
      data: this.content,
      counter: this.content.length,
      limit: 350
    }
  },
  computed: {
    size() {
      return this.counter + ' / ' + this.limit
    }
  },
  methods: {
    updateCounter(ev) {
      if(ev.target.value.length > 350) {
        this.data = ev.target.value.substring(0, this.limit);
      } else {
        this.data = ev.target.value;
      }
      this.counter = this.data.length
      this.$emit('update', this.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .c-textarea {
    width: 100%;
  }

  .c-textarea  textarea {
    width: 100%;
    height: 120px;
  }

  .c-textarea--full {
    background-color: #CFC;
  }
</style>
