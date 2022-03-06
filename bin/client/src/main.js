import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import { createHead } from '@vueuse/head'
import basePlugin from "./plugins/basePlugin.js";
const head = createHead()

import "./assets/style/index.scss"

createApp(App)
    .use(router)
    .use(head)
    .use(basePlugin)
    .mount('#app')
