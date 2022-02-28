import { reactive } from "vue";
const today = new Date();
const date = today.getDate()  + "-" + (today.getMonth()+1) + "-" + today.getFullYear() + " " +
today.getHours() + ":" + today.getMinutes() + ":" +today.getSeconds();
const dateCreated = date
const dateUpdated = date

let initialTodo = {
    id: 0,
    title: "Created Level 3 design",
    body: "I minimized the snub component to a much smaller level",
    completed: false,
    dateCreated,
    dateUpdated

}
export const store = reactive({
    todos: [initialTodo,initialTodo,initialTodo],
    create(obj){
        const newTodo = obj
        this.todos = [...this.todos, newTodo]
    },
    todoss(){ return this.todos },
    delete(todo){
       this.todo =  this.todos.filter(t=>t!=todo)
    },
    update(todo){
        let todoObject =  this.todos.filter(t=>t==todo)
        todoObject = todo
    },

})