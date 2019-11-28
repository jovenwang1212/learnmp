import Vue from 'vue'
import App from './App'
import request from '@/utils/request'

Vue.config.productionTip = false
App.mpType = 'app'

// 把request设置给Vue原型
Vue.prototype.$request = request

const app = new Vue(App)
app.$mount()
