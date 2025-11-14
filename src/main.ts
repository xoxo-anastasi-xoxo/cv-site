import { createApp } from 'vue'
import 'normalize.css'

import App from '@/App.vue'
import router from '@/router'
import '@/styles/main.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
