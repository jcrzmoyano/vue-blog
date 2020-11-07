import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from "vuelidate"

import LastArticles from './components/LastArticles'
import Blog from './components/Blog'
import Formulario from './components/Formulario'
import Pagina from './components/Pagina'
import ErrorComponent from './components/ErrorComponent'
import Peliculas from './components/Peliculas'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuelidate)

const routes = [
  {path: '/home', component: LastArticles},
  {path: '', component: LastArticles},
  {path: '/blog', component: Blog},
  {path: '/formulario', component: Formulario},
  {path: '/pagina/:id?', name: 'pagina', component: Pagina},
  {path: '/peliculas', component: Peliculas},
  {path: '*', component: ErrorComponent}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
