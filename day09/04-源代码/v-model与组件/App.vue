<template>
  <div>
    <h2>这里是父组件</h2>
    <h3>父对子说的:{{msg}}</h3>
    <Son v-model="msg"/>
  </div>
</template>

<script>
import Son from './Son'
export default {
  components:{
    Son
  },
  data(){
    return{
      msg:'不要早恋'
    }
  },
  methods: {
    // inputHandler(data){
    //   /* eslint-disable */
    //   console.log(data)
    //   this.msg = arguments[0]
    // }
  },
}
</script>

<style>

</style>