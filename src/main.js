import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = 'https://pokeapi.co/api/v2/'

new Vue({
  router,
  store,
	beforeMount() {
		this.$store.commit('initialiseStore');
	},
  render: h => h(App)
}).$mount('#app')
