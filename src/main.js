import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'bootstrap/bootstrap.min.css';

const eventsHub = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
