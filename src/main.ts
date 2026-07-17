import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}
if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
}
window.scrollTo(0, 0)
window.addEventListener('load', () => window.scrollTo(0, 0))

createApp(App).mount('#root')
