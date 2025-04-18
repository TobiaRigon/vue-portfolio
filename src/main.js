import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { createHead } from '@vueuse/head'

import './style.scss'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import MainLayout  from './layouts/MainLayout.vue'
import HomePage from './pages/HomePage.vue'
import HomePageIt from './pages/ita/HomePageIt.vue'
import AboutPage from './pages/AboutPage.vue'
import AboutPageIt from './pages/ita/AboutPageIt.vue'
import WorkPage from './pages/WorkPage.vue'
import WorkPageIt from './pages/ita/WorkPageIt.vue'

import DevOpsPage from './pages/DevOpsPage.vue';
import DevOpsPageIt from './pages/ita/DevOpsPageIt.vue';


const routes = [
    { path: '/', redirect: () => getPreferredLocale() },

    // Inglese
    { path: '/en', component: HomePage },
    { path: '/en/about', component: AboutPage },
    { path: '/en/work', component: WorkPage },
    { path: '/en/devops', component: DevOpsPage },

    // Italiano
    { path: '/it', component: HomePageIt },
     { path: '/it/about', component: AboutPageIt },
     { path: '/it/work', component: WorkPageIt },
    { path: '/it/devops', component: DevOpsPageIt },
]

function getPreferredLocale() {
    const saved = localStorage.getItem('preferredLang');
    if (saved) return `/${saved}`;

    const lang = navigator.language || navigator.userLanguage;
    if (lang.startsWith('it')) return '/it';
    return '/en';
}

  


const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.afterEach(() => {
    window.scrollTo(0, 0); // Sposta la finestra in cima alla pagina
});

const app = createApp(MainLayout)

app.use(router)
app.mount('#app')
