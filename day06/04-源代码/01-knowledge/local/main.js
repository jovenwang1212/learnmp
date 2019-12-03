new Vue({
  el: '#app',
  data:{
    isLogin: true
  },
  created(){
    this.checkLogin()
    this.checkVip()
  },
  methods: {
    checkLogin(){
      axios({
        url:'http://localhost:10086/checkLogin'
      }).then(res=>{
        // console.log(res)
        this.isLogin = res.isLogin
      })
    },
    checkVip(){
      axios({
        url:'http://localhost:10086/isVip'
      }).then(res=>{
        // console.log(res)
        this.isLogin = res.isLogin
      })
    }
  },
})