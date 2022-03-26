import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import './main.css'
import store from './vuex'

const app = createApp(App)

app.use(store)

app.mount('#app')
