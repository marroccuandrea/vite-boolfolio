import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Projects from './pages/Projects.vue';
import Error404 from './pages/Error404.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: About,
        },
        {
            path: '/contatti',
            name: 'contacts',
            component: Contacts,
        },
        {
            path: '/progetti',
            name: 'projects',
            component: Projects,
        },
        {
            path: '/dettaglio-post/:slug',
            name: 'projectDetail',
            component: ProjectDetail,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'error404',
            component: Error404,
        }
    ]
})

export { router }