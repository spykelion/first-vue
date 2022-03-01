import { createRouter, createWebHistory } from "vue-router"
import Todo from '../components/Todo.vue'
import TodoDetails from '../components/TodoDetails.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Todo
    },
    {
        path: '/todo/:id',
        name: 'TaskDetails',
        component: TodoDetails
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router