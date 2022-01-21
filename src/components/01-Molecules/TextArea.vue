<template>
  <div class="c-textarea">
    <Counter :value="counter" :limit="limit" />
    <textarea v-model="data" @keyup="updateCounter" :class="(counter==limit)?'c-textarea--full':''"></textarea>
  </div>
</template>

<script>
import Counter from '../00-Atoms/Counter.vue'

export default {
  name: 'TextArea',
  components: {
    Counter
  },
  props: {
    content: String,
    limit: String
  },
  data: function() {
    return {
      data: this.content,
      counter: this.content.length.toString(),
    }
  },
  methods: {
    updateCounter(ev) {
      if(ev.target.value.length > this.limit) {
        this.data = ev.target.value.substring(0, this.limit);
      } else {
        this.data = ev.target.value;
      }
      this.counter = this.data.length.toString();
      console.log(this.counter)
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
