<script setup>
import { ref } from "vue";
import { store } from "../store";
// console.log(store.todos)

const mytodo = ref({
    title: '',
    body: ''
})
const title = ref('')
const body = ref('')

</script>

<template>
  <div class="todo">
      <form action="">
          <input type="text" v-model="mytodo.title">
          <textarea v-model="mytodo.body" name="" id="" cols="30" rows="10"></textarea>
      </form>
      <br>
      <button @click="store.create(mytodo)">Add todo</button>
   </div>
  <ul>
    <li v-for="(todo) in store.todos" :key="todo.id">
      {{ todo.body }}
      <button @click="store.delete(todo.id)">X</button>
    </li>
  </ul>
</template>

<style lang="scss">
.todo {
  .content {
    color: blue;
  }
}
</style>

