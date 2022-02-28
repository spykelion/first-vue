<script setup>
import { ref, } from 'vue'

const props = defineProps({
  msg: String,
  initCount: {
    type: Number,
  },
})

const count = ref(props.initCount)
// console.log(initCount)
console.log(props)
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>{{count}}</p>

  <button type="button" @click="count++">count is: {{ count }}</button>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
