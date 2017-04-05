// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

Vue.config.productionTip = false

// Use commonjs version if es build is not working
// import BootstrapVue from 'bootstrap-vue';

// Import styles if style-loader is available
// You have to manually add css files if lines below are not working
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Globally register components
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
