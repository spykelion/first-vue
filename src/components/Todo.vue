<script setup>
import { reactive, ref } from "vue";
import { store } from "../store";

const mytodo = reactive({
  title: "",
  body: "",
});

const items = ["All", "Completed"];
function openOverlay() {
  document.getElementById("overlay").style.display = "flex";
}
function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}
</script>

<template>
  <div id="overlay" class="center">
    <div class="modal-content">
      <button class="close" @click="closeOverlay">x</button>
      <div class="form">
        <form class="card-form" @submit.prevent="store.create(mytodo)">
          <div class="input">
            <input
              v-model.trim.lazy="mytodo.title"
              type="text"
              class="input-field"
              required
            />
            <label class="input-label">Title</label>
          </div>
          <div class="action">
            <p class="input">Description</p>
            <textarea
              v-model.lazy.trim="mytodo.body"
              placeholder="Task description"
              rows="10"
              cols="30"
              class="ui-autocomplete-input"
              role="textbox"
            ></textarea>
          </div>
               <button id="add" class="action-button">
            Add
          </button>
        </form>
        <div class="action">
     
        </div>
      </div>
    </div>
  </div>

  <div class="todo task">
    <header>
      <h2>Tasks</h2>
      <button @click="openOverlay">Create</button>
    </header>
    <nav>
      <ul>
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </ul>
    </nav>
    <ul class="todo-items">
      <h3>{{ (store.todos.length < 1 && "No task today") || "" }}</h3>
      <li v-for="todo in [...store.todos].reverse()" :key="todo.dateCreated">
        <div class="items">
          <div class="item">
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
        </div>
        <span>
          <small
            >Created at {{ todo.dateCreated }} | Updated at
            {{ todo.dateUpdated }}</small
          >
        </span>
        <p>
          <small
            ><a href="">View details - {{ todo.id }}</a></small
          >
        </p>
      </li>
      <p>
        <a href="">{{ (store.todos.length > 5 && "View all") || "" }}</a>
      </p>
      <h3></h3>
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
  //   border: 1px solid;
}

nav {
  ul {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    justify-content: space-evenly;
  }
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
    // border: 1px solid;
    // display: flex;
    justify-content: space-between;
    background: #d9dde7;
    border-radius: 0.8rem;
    padding: 1rem;
    margin: 0.4rem;
    span,
    label {
      display: inline-block;
    }
    label {
      display: block;
    }
    .items {
      display: flex;
      gap: 1.2rem;
      justify-content: space-between;
      button {
        align-self: center;
      }
      .item {
        display: flex;
        gap: 1.2rem;
        label,
        input {
          align-self: center;
        }
      }
    }
  }
}

#overlay {
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  align-items: center;
  justify-content: center;
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: rgb(0, 0, 0);
  background-color: rgba(39, 36, 36, 0.877); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */

  .modal-content {
    z-index: 3;
    //  pointer-events: none !important;
    position: relative;
    .close {
      position: absolute;
      top: -3rem;
      right: 0rem;
    }
    .form {
      background: #ffff;
      border: 1px solid;
      border-radius: 0.53rem;
      padding: 2rem;
    }
  }
}
.card-form {
  padding: 2rem 1rem 0;
}

.input {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  padding-top: 1.5rem;
  & + .input {
    margin-top: 1.5rem;
  }
}

.input-label {
  color: #17161f;
  position: absolute;
  top: 1.5rem;
  transition: 0.25s ease;
}

.input-field {
  border: 0;
  z-index: 1;
  background-color: transparent;
  border-bottom: 2px solid #eee;
  font: inherit;
  font-size: 1.125rem;
  padding: 0.25rem 0;
  &:focus,
  &:valid {
    outline: 0;
    border-bottom-color: #17161f;
    & + .input-label {
      color: #17161f;
      transform: translateY(-1.5rem);
    }
  }
}
textarea {
  resize: none;
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: inherit;
  border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
  border-image: none;
  border-radius: 6px;
  border: 1px solid;

  padding: 5px 8px;
  transition: background-color 0.2s ease 0s;
  &:focus {
    background: none repeat scroll 0 0 #ffffff;
    outline-width: 0;
  }
}
</style>
