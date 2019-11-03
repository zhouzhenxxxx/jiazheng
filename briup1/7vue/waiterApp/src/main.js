import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import orderPane from './components/OrderPane'
import moment from 'moment'

Vue.config.productionTip = false
Vue.component('briup-order-pane',orderPane)
Vue.filter('datefmt',function(val){
  if(val){
    return moment(val).format('YYY-MM-DD HH:mm:ss')
  }
  return val;
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
