import { createApp } from 'vue'
import { createRouter , createWebHashHistory} from 'vue-router'
import './style.css'

import MainLayout  from './layouts/MainLayout.vue'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import TagsPage from './pages/TagsPage.vue'

const routes = [
   {path: '/', component: HomePage} ,
   {path: '/about', component: AboutPage} ,
   {path: '/tags', component: TagsPage} ,
]



const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(MainLayout)

app.use(router)
app.mount('#app')
