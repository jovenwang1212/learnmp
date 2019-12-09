<template>
  <div>
    <!-- 头部 -->
    <SearchLink />
    <div class="content">
      <ul class="left">
        <li
          v-for="(cate1, index) in categories"
          :key="index"
          :class="{ active: activeIndex === index }"
          @click="changeIndex(index)"
        >
          {{cate1.cat_name}}
        </li>
      </ul>
      <div class="right" v-if="categories.length">
        <img src="/static/images/titleImage.png" alt="" />
        <ul>
          <li class="cate2" v-for="(cate2, index2) in categories[activeIndex].children" :key="index2">
            <p v-if="cate2.children&&cate2.children.length">/<span>{{cate2.cat_name}}</span>/</p>
            <ul>
              <li class="cate3" v-for="(cate3, index3) in cate2.children" :key="index3"
              @click="toSearchList(cate3.cat_name)">
                <img
                  :src="cate3.cat_icon"
                  alt=""
                />
                <span>{{cate3.cat_name}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearchLink from '@/components/SearchLink'
export default {
  components: {
    SearchLink
  },
  data () {
    return {
      activeIndex: 0,
      categories: []
    }
  },
  created () {
    this.getCategories()
  },
  methods: {
		changeIndex(index){
			this.activeIndex = index
		},
    toSearchList (catName) {
      wx.navigateTo({ url: '/pages/search_list/main?query=' + catName })
    },
    getCategories () {
      this.$request({
        url: '/api/public/v1/categories'
      }).then(data => {
        // console.log(data)
        this.categories = data
      })
    }
  }
}
</script>
<style lang="less">
.content {
  position: fixed;
  top: 100rpx;
  width: 100%;
  bottom: 0;
  display: flex;
  .left {
    width: 198rpx;
    height: 100%;
    overflow: auto;
    li {
      height: 100rpx;
      border-bottom: 1rpx solid #eee;
      text-align: center;
      line-height: 100rpx;
      // 不可继承
      box-sizing: border-box;
      background-color: #f4f4f4;
      color: #333;
      &.active {
        background-color: #fff;
        color: #eb4450;
        position: relative;
        &::before {
          position: absolute;
          content: "";
          width: 8rpx;
          height: 60rpx;
          background-color: #eb4450;
          left: 0;
          top: 20rpx;
        }
      }
    }
  }
  .right {
    flex: 1;
    padding: 20rpx 16rpx;
    height: 100%;
    overflow: auto;
    > img {
      height: 180rpx;
      width: 520rpx;
    }
  }
}

.cate2 {
  margin-bottom:20rpx;
  > p {
    height: 110rpx;
    line-height: 110rpx;
    color: #e0e0e0;
    text-align: center;
    span {
      margin: 0 30rpx;
      color: #333;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
}
.cate3 {
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 120rpx;
    height: 120rpx;
  }
  span{
    margin:20rpx 0;
  }
}
</style>
