import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'

import { soundManager } from './js/SoundManager.js'
import { useLang } from './js/userLang.js'

import './style.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import en from './locales/en.json'
import it from './locales/it.json'

import MainLayout from './layouts/MainLayout.vue'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import WorkPage from './pages/WorkPage.vue'
import NotFound from './pages/NotFound.vue'

function getPreferredLocale() {
  const saved = localStorage.getItem('preferredLang')
  if (saved) return `/${saved}`

  const lang = navigator.language || navigator.userLanguage
  if (lang.startsWith('it')) return '/it'
  return '/en'
}

const routes = [
  { path: '/', redirect: () => getPreferredLocale() },
  { path: '/en', component: HomePage },
  { path: '/en/about', component: AboutPage },
  { path: '/en/work', component: WorkPage },
  { path: '/it', component: HomePage },
  { path: '/it/about', component: AboutPage },
  { path: '/it/work', component: WorkPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const lang = useLang()

const i18n = createI18n({
  legacy: false,
  locale: lang.value,
  fallbackLocale: 'en',
  messages: { en, it },
})

// Sincronizza la locale i18n con il cambio di lang via URL
router.afterEach((to) => {
  window.scrollTo(0, 0)
  const segment = to.path.split('/')[1]
  if (segment === 'it' || segment === 'en') {
    i18n.global.locale.value = segment
    lang.value = segment
    localStorage.setItem('preferredLang', segment)
  }
})

let firstLoad = true
let lastPath = null

router.afterEach((to) => {
  if (firstLoad) {
    firstLoad = false
    lastPath = to.fullPath
    return
  }
  if (to.fullPath === lastPath) return
  soundManager.play('menuClick')
  lastPath = to.fullPath
})

const app = createApp(MainLayout)
app.use(router)
app.use(i18n)
app.mount('#app')
