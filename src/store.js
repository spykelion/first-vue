import { reactive } from "vue";
const today = new Date();
const dateCreated = today.getDate()  + "-" + (today.getMonth()+1) + "-" + d.getFullYear() + " " +
today.getHours() + ":" + today.getMinutes() + today.getSeconds();
const dateUpdated = today.getDate()  + "-" + (today.getMonth()+1) + "-" + d.getFullYear() + " " +
today.getHours() + ":" + today.getMinutes() + today.getSeconds();

const initialTodo = {
    id: 0,
    title: "Created Level 3 design",
    body: "I minimized the interface to a much smaller level",
    dateCreated,
    dateUpdated

}
export const store = reactive({
    todo: [initialTodo*3],
    create(){
        
    },

})