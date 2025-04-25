import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { createHead } from '@vueuse/head'
import { soundManager } from './js/SoundManager.js';



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
import NotFound from './pages/NotFound.vue';
import NotFoundIt from './pages/ita/NotFoundIt.vue';        


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

     // Catch-all (404)
     { path: '/it/:pathMatch(.*)*', name: 'NotFoundIt', component: NotFoundIt },
     // Catch-all (404)
     { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
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


let firstLoad = true;
let lastPath = null;

router.afterEach((to, from) => {
  window.scrollTo(0, 0);

  // Evita il suono al primo caricamento
  if (firstLoad) {
    firstLoad = false;
    lastPath = to.fullPath;
    return;
  }

  // Se torni sulla stessa pagina (es: it -> it), non suona
  if (to.fullPath === lastPath) {
    return;
  }

  soundManager.play('pageTransition');
  lastPath = to.fullPath;
});


const app = createApp(MainLayout)

app.use(router)
app.mount('#app')
