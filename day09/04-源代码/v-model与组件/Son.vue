<template>
  <div class="son-wrapper">
    <h2>这里是子组件</h2>
    <h3>父对子说的:{{info}}</h3>
  <button @click="say2Father">对父亲说</button>
  </div>
</template>

<script>
export default {
   model: {
    prop: 'info',
    event: 'aaaaa'
  },
  props:['info'],
  methods: {
    say2Father(){
      this.$emit('aaaaa','少抽烟')
    }
  },
}
</script>

<style scoped>
 .son-wrapper{
   border:1px solid green;
 }
</style>