import {createRouter,createWebHistory} from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import AddTasks from '../views/AddTasks'

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
    
]

const router = createRouter(
    {
        history: createWebHistory(process.env.BASE_URL), routes,
    }
)

export default router