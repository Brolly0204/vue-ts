import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import installElementPlugin from './plugins/element'

createApp(App)
.use(installElementPlugin)
.mount('#app')
