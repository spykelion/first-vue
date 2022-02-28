<script setup>
import { ref } from "vue";
import { store } from "../store";
// console.log(store.todos)

const mytodo = ref({
  title: "",
  body: "",
});
const items = ["All", "Completed"];
</script>

<template>
  <div class="todo task">
    <header>
      <h2>Tasks</h2>
      <button>Create</button>
    </header>
    <nav>
      <ul>
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </ul>
    </nav>
    <ul class="todo-items">
      <li v-for="todo in store.todos" :key="todo.dateCreated">
        <div>
          <input
            type="checkbox"
            :name="todo.title"
            :id="todo.title"
            v-model="todo.completed"
            :value="todo.title"
          />
          <label :for="todo.title">
            <h4>{{ todo.title }}</h4>
            <p>{{ todo.body }}</p>
          </label>
        </div>
        <button @click="store.delete(todo.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
header {
  display: flex;
  gap: 5rem;
}
.task {
  padding: 2rem;
  border-radius: 1.2rem;
  border: 1px solid;
}

nav {
  ul {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    justify-content: space-evenly;
  }
}

form {
  input {
    display: block;
  }
  textarea {
    display: block;
  }
  margin: 5rem;
}

button {
  background: #116acc;
  color: #ffff;
  border-radius: 0.9rem;
  padding: 0.6rem;
  border: none;
  cursor: pointer;
  height: fit-content;
  width: fit-content;
  //   transition: 1s ease-in-out;
  &:hover {
    background: #104a88;
  }
}
.todo-items {
  li {
    border: 1px solid;
    display: flex;
    justify-content: space-between;
    background: #d9dde7;
    border-radius: 0.8rem;
    padding: 1rem;
    span,
    label {
      display: inline-block;
    }
    label {
      display: block;
    }
  }
}
</style>
