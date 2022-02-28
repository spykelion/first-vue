<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Todo from './components/Todo.vue';
</script>

<template>
  <Todo />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

#app {
font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-decoration: none;
  outline-style: none;
}
</style>
