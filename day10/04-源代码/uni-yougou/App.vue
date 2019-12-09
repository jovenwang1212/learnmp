<script>
export default {
  onHide () {
    // console.log('on hide')
    this.$store.commit('storeCart')
  }
}
</script>

<style>
@import url('./css/iconfont.css');
ul,li{
	list-style: none;
}
page {
  color: #333;
}

.text-line2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
