import { createApp } from 'vue'
import App from './photos/App.vue'
// import { router } from './photos/router.js'
import { store } from './photos/store.js'
const app = createApp(App)
app.use(store)
app.mount('#app')