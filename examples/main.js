import Vue from 'vue'
import App from './App.vue'

import XdUi from '../packages/index'

Vue.use(XdUi);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
