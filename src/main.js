// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import { store } from './store'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts' //引入echarts

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.prototype.$store = store
Vue.prototype.$echarts = echarts //引入组件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
