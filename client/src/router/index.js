
import {createRouter,createWebHistory} from 'vue-router'
import RegisterNow from '../components/RegisterNow.vue'
import HomeNow from '../components/HomeNow.vue'

const routes= [
        {
        path: '/',
        name: 'home',
        component: HomeNow
        },
{
            path: '/register',
            name: 'register',
            component: RegisterNow
        }
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router