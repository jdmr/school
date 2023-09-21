import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/addTeacher',
        name: 'TeacherAdd',
        component: () => import('./views/TeacherAdd.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
