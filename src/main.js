import './assets/main.css'

import { getAnalytics } from 'firebase/analytics'
import { firebase_app } from './firebaseinit'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
// getAnalytics(firebase_app)
