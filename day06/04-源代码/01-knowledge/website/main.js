new Vue({
  el: '#app',
  data:{
    isLogin: true
  },
  created(){
    axios({
      url:'http://localhost:10086/checkLogin'
    }).then(res=>{
      // console.log(res)
      this.isLogin = res.isLogin
    })
  }
})