import { createApp, reactive } from 'vue' // <--- importing reactive object
import App from './App.vue'
import router from './router'
import store from './store'

// Reactive object, we use this as a Global Storage
const GStore = reactive({ flashMessage: '' })

createApp(App)
  .use(store)
  .provide('GStore', GStore)  // <--- Provide this Reactive object ('key', value) so others (components) can use (inject) it
  .use(router)
  .mount('#app')
