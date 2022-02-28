<script setup>
import { store } from "../store";
console.log(store.todos)
</script>

<template>
  <div class="todo">
    <p>Welcome to todo nation</p>
    <div class="content">Here is a list of all todo items</div>
  </div>
  <ul>
    <li v-for="(todo) in store.todos" :key="todo.id">
      {{ todo.body }}
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

