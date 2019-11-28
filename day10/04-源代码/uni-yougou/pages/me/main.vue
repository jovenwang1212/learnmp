<template>
  <div class="container">
    <div class="header">
      <div class="portrait-wrapper">
        <div class="portrait">
          <img :src="userInfo.avatarUrl?userInfo.avatarUrl:defaultImgUrl"
               alt="">
        </div>
      </div>
      <p v-if="!userInfo.nickName">登录</p>
      <p v-else>{{userInfo.nickName}}</p>
    </div>
    <!-- 主要内容部分 -->
    <div class="content">
      <ul class="favo">
        <li>
          <span class="num">0</span>
          <span>收藏的店铺</span>
        </li>
        <li>
          <span class="num">0</span>
          <span>收藏的商品</span>
        </li>
        <li>
          <span class="num">0</span>
          <span>关注的商品</span>
        </li>
        <li>
          <span class="num">0</span>
          <span>我的足迹</span>
        </li>
      </ul>
      <div class="order-detail">
        <p class="title">我的订单</p>
        <ul>
          <li v-for="item in menuList" :key="item.name" @click="toOrder(item.index)">
            <span class="iconfont" :class="item.clsName"></span>
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="address">
        <p>收货地址管理</p>
      </div>

      <div class="others">
        <ul>
          <li>
            <span>联系客服</span>
            <span class="right" @click="makeCall('18771930973')">400-618-4000</span>
          </li>
          <li>
            <span>意见反馈</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const DEFAULT_IMG_URL = 'http://www.sucaijishi.com/uploadfile/2018/0508/20180508023717621.png'
export default {
  data () {
    return {
      menuList: [
        {
          name: '待付款',
          index: 1,
          clsName: 'icon-pre-pay'
        },
        {
          name: '待收货',
          index: 2,
          clsName: 'icon-pre-receive'
        },
        {
          name: '退款/退货',
          index: 3,
          clsName: 'icon-tuihuo'
        },
        {
          name: '全部订单',
          index: 0,
          clsName: 'icon-all-order'
        }
      ],
      userInfo: {},
      defaultImgUrl: DEFAULT_IMG_URL
    }
  },
  onShow () {
    this.userInfo = wx.getStorageSync('userInfo')
  },
  methods: {
    toOrder (index) {
      wx.navigateTo({ url: '/pages/order/main?activeIndex=' + index })
    },
    makeCall (mobileNo) {
      wx.makePhoneCall({
        phoneNumber: mobileNo // 仅为示例，并非真实的电话号码
      })
    }
  }
}
</script>


<style lang="less">
.container {
  background-color: #f4f4f4;
  padding-bottom: 40rpx;
  font-size: 14px;
}
.header {
  height: 410rpx;
  background-color: #eb4450;
  padding-top: 110rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  .portrait {
    width: 140rpx;
    height: 140rpx;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 68rpx;
    img {
      width: 130rpx;
      height: 130rpx;
      border-radius: 50%;
    }
  }
  p {
    color: #fff;
    margin-top: 20rpx;
  }
}
.content {
  margin: -28rpx 18rpx 0;
  color: #333;
  .favo {
    display: flex;
    color: #666;
    background-color: #fff;
    height: 120rpx;
    padding: 0 32rpx;
    align-items: center;
    justify-content: space-evenly;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .num {
      color: #999;
      margin-bottom: 4rpx;
    }
  }
  .order-detail {
    margin-top: 20rpx;
    background-color: #fff;
    .title {
      height: 88rpx;
      line-height: 88rpx;
      padding-left: 30rpx;
      border-bottom: 1rpx solid #ddd;
      font-size: 20px;
    }
    ul {
      display: flex;
      justify-content: space-evenly;
      height: 166rpx;
      align-items: center;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        .iconfont {
          color: #eb4450;
          margin-bottom: 20rpx;
          font-size: 48rpx;
        }
      }
    }
  }
  .address {
    margin-top: 20rpx;
    background-color: #fff;
    padding-left: 30rpx;
    height: 88rpx;
    line-height: 88rpx;
  }
  .others {
    margin-top: 20rpx;
    background-color: #fff;
    ul {
      li {
        height: 86rpx;
        line-height: 86rpx;
        border-bottom: 1rpx solid #ddd;
        margin: 0 30rpx;
        display: flex;
        justify-content: space-between;
        .right {
          color: #999;
        }
        &:last-child {
          border: none;
        }
      }
    }
  }
}
</style>