import Vue from 'vue'
import App from './App'
import request from '@/utils/request'
import store from '@/store'

// 注册到Vue原型
Vue.prototype.$request = request

// store设置到原型上
Vue.prototype.$store = store
wx.store = store

// 提示框
Vue.prototype.$showToast = function (title) {
  wx.showToast({
    icon: 'none',
    title: title
  })
}

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
