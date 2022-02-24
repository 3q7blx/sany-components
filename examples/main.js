import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import XdUi from '../packages/index' //组件库项目内引入组件
Vue.use(XdUi); //全局注册组件

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
