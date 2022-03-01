<script setup>
import Todo from './components/Todo.vue';
</script>

<template>
  <router-link to="/"><Todo /></router-link>
  <router-view />
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
