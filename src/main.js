import { createApp } from 'vue'
// import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// VIEWS
import App from './App.vue'
import Home from '@/components/views/Home.vue'
import Note from '@/components/views/Note.vue'
import NoteView from '@/components/views/NoteView.vue'
import ErroPage from '@/components/views/ErrorPage.vue'



// import ErrorPage from "@/views/ErrorPage.vue"
import './assets/main.css'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/alert'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/note",
            name: "Note",
            component: Note
        },
        {
            path: "/note/:id",
            name: "noteView",
            component: NoteView
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: ErroPage
        }
    ]

})

// Vue.use(BootstrapVue)

createApp(App)
.use(router)
.mount('#app')


