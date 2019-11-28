<script>
export default {
  onHide () {
    console.log('app 切后台了')
    this.$store.commit('save')
  }
}
</script>

<style lang="less">
@import url(./css/iconfont.css);
.text-line2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

</style>