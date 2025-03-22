import { createApp } from 'vue'
import App from './App.vue'
import { gsap } from 'gsap'

import './assets/main.scss'

createApp(App).mount('#app')

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
