import Vue from 'vue'
import App from './App'
import request from '@/utils/request'

// 注册到Vue原型
Vue.prototype.$request = request

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
