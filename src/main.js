import { createApp } from 'vue'
// import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import Note from '@/components/Note.vue'
// import ErrorPage from "@/views/ErrorPage.vue"
import './assets/main.css'
import 'bootstrap/js/dist/modal'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Note",
            component: Note
        }
    ]

})

// Vue.use(BootstrapVue)

createApp(App)
.use(router)
.mount('#app')


