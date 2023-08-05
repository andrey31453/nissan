// imports
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import app from './app.vue'

createApp(app).use(createPinia()).mount('app')
