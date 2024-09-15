import './assets/Style/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Aura from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'
import router from './router'
import ContentContainer from './Layout/ContentContainer.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  },
  unstyled: false
})
app.component('ContentContainer', ContentContainer)
app.mount('#app')
