// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Titolo from './components/Titolo.vue'
import Titolo2 from './components/Titolo2.vue'
import Registrati from './components/Registrati.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.component('titolo', Titolo)
Vue.component('titolo2', Titolo2)
Vue.component('registrati', Registrati)
Vue.component('home', Home)
Vue.component('login', Login)

window.app = new Vue({
  el: '#app',
  data () {
    return {
      pag: 0,
      user: ''
    }
  }
})
