<template>
  <div id="app">
    <h2>父组件</h2>
    <h3>我的年龄{{person.age}}</h3>
    <button @click="person.age++">+</button>
    <HelloWorld :fatherInfo="person" msg="不要早恋" parentMsg="这是一个寂寞的天"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return{
      person:{
        name:'Joven',
        age:18
      }
    }
  }
}
</script>
