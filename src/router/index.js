import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Aboutme from '../views/AboutView.vue'
import Projects from '../views/ProjectsView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'About',
        component: Aboutme,
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;