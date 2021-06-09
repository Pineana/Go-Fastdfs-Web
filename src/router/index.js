import {createRouter,createWebHistory} from 'vue-router';
import login from '../views/login';
import layout from '../views/layout'

const routes = [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/layout',
        name: 'layout',
        component: layout
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

export  default router