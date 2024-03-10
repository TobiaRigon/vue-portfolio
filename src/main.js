import { createApp } from 'vue'
import { createRouter , createWebHashHistory} from 'vue-router'
import './style.scss'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import MainLayout  from './layouts/MainLayout.vue'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import WorkPage from './pages/WorkPage.vue'

const routes = [
   {path: '/', component: HomePage} ,
   {path: '/about', component: AboutPage} ,
   {path: '/work', component: WorkPage} ,
]



const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.afterEach(() => {
    window.scrollTo(0, 0); // Sposta la finestra in cima alla pagina
});

const app = createApp(MainLayout)

app.use(router)
app.mount('#app')
