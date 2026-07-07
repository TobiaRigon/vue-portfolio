import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { soundManager } from './js/SoundManager.js'
import { useLang } from './js/userLang.js'
import { i18n } from './i18n.js'
import { loadTextsIntoI18n } from './js/loadTexts.js'
import { waitForAuthReady, isAuthenticated } from './js/useAuth.js'

import './style.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import MainLayout from './layouts/MainLayout.vue'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import WorkPage from './pages/WorkPage.vue'
import NotFound from './pages/NotFound.vue'
import AdminLogin from './pages/admin/AdminLogin.vue'
import AdminDashboard from './pages/admin/AdminDashboard.vue'

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
  { path: '/admin/login', component: AdminLogin },
  { path: '/admin', component: AdminDashboard, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to) => {
  if (!to.meta.requiresAuth) return true
  await waitForAuthReady()
  if (!isAuthenticated()) return '/admin/login'
  return true
})

const lang = useLang()

// Sincronizza la locale i18n con il cambio di lang via URL
router.afterEach((to) => {
  window.scrollTo(0, 0)
  const segment = to.path.split('/')[1]
  if (segment === 'it' || segment === 'en') {
    i18n.global.locale.value = segment
    lang.value = segment
    localStorage.setItem('preferredLang', segment)
    loadTextsIntoI18n(i18n, segment)
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
