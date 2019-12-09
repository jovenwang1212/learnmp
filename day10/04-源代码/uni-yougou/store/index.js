import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: wx.getStorageSync('cart') || {}
  },
  mutations: {
    add2Cart (state, goodsId) {
      let cart = state.cart
      // 如果第一次添加，Num:1,否则Num++
      cart[goodsId] = {
        num: cart[goodsId] ? ++cart[goodsId].num : 1,
        checked: true // 只要添加checked都为true
      }
    },
    updateCart (state, goodsList) {
      // state里面的cart同步goodsList
      let cart = {}
      goodsList.forEach(v => {
        cart[v.goods_id] = {
          num: v.num,
          checked: v.checked
        }
      })
      state.cart = cart
    },
    // 把state.cart数据存储到storage里面
    storeCart (state) {
      wx.setStorageSync('cart', state.cart)
    },
    arrangeCart (state) {
      let cart = state.cart
      for (let key in cart) {
        if (cart[key].checked) {
          delete cart[key]
        }
      }
    }
  },
  getters: {
    getCart (state) {
      return state.cart
    }
  },
  plugins: [createLogger()]
})

export default store
