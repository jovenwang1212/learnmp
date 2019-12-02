function Vue() {

}

Vue.prototype.$request = function () {
  console.log('发请求')
}

const app = new Vue()
const page = new Vue()

// app.myScroll = '这是一个Iscroll实例'

// // 对象上可以添加任何的属性

// console.log(app.myScroll)

app.$request()
page.$request()

