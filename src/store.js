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
let anotherTodo = {
    id: 0,
    title: "Fix the bug:trech",
    body: "I minimized the snub component to a much smaller level",
    completed: false,
    dateCreated,
    dateUpdated

}
export const store = reactive({
    todos: [initialTodo,anotherTodo],
    create(obj){
        obj.id = this.todos.length + 1
        obj.completed = false
        obj.dateCreated = dateCreated
        obj.dateUpdated = dateCreated
        this.todos = [...this.todos, obj]
    },
    allTodos(){ return this.todos },
    delete(id){
        console.log(id)
       this.todos = this.todos.filter(t=>t.id!=id)
    },
    update(todo){
        let todoObject =  this.todos.filter(t=>t==todo)
        todoObject = todo
    },

})