import {createRouter,createWebHistory} from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import AddTasks from '../views/AddTasks'
import EditTasks from '../views/EditTasks'

const routes = [
    {
        path :'/',
        name : 'Home',
        component : Home
    },
    {
        path :'/about',
        name : 'About',
        component : About
    },
    {
        path :'/addTasks',
        name : 'AddTasks',
        component : AddTasks
    },
    {
        path :'/editTasks/:id',
        name : 'EditTasks',
        component : EditTasks
    }, 
]

const router = createRouter(
    {
        history: createWebHistory(process.env.BASE_URL), routes,
    }
)

export default router