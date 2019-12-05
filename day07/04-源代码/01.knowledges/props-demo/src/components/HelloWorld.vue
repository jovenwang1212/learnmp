<template>
  <div class="hello">
    <h2>子组件</h2>
    <h3>父亲对儿子说的：{{ msg }}</h3>
    <h3>父亲对儿子说的：{{ parentMsg }}</h3>
    <h3>父亲的信息{{myFatherInfo.name}}--{{myFatherInfo.age}}</h3>
    <input type="text" v-model="myFatherInfo.age">
    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    parentMsg:String,
    fatherInfo:{
      type:Object,
      default:function(){
        return{}
      }
    }
    // ps:Object
  },
  data(){
    return{
      myFatherInfo:JSON.parse(JSON.stringify(this.fatherInfo))
    }

  },
  watch:{
    // ps(newValue){
    //   // eslint-disable-next-line no-console
    //   console.log(newValue)
    // }

    fatherInfo:{
      deep:true,
      handler(newValue){
        // eslint-disable-next-line no-console
        console.log(newValue)
        this.myFatherInfo = Object.assign({},newValue)
      }
    }

  }
}
</script>

<style>
  .hello{
    border:1px solid hotpink;
  }
</style>