<template>
  <div class="container">
    <div class="header">
      <ul>
        <li class="active">全部</li>
        <li class="active">待付款</li>
        <li class="active">待收货</li>
        <li class="active">退款/退货</li>
      </ul>
    </div>

    <div class="content">
      <ul>
        <li>
          <div class="goods-info">
            <img src="https://api.zbztb.cn/full/b0fef388cd035694eac75d7b53e4a1eebf041cf3.jpg"
                 alt="">
            <div class="right">
              <p>asfafaf</p>
              <div class="price-num">
                <span class="price">￥1000</span>
                <span class="num">x10</span>
              </div>
            </div>
          </div>
          <p class="total-price">
            共2件商品 总计：&yen;1000(含运费0.00)
          </p>
          <div class="order">
            <span>订单号:xxx</span>
            <button type="primary">
              支付
            </button>
          </div>

        </li>
      </ul>
    </div>

  </div>
</template>

<style lang="less">
.container {
  background-color: #f4f4f4;
}
.header {
  background-color: #fff;
  ul {
    display: flex;
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      height: 100rpx;
      line-height: 100rpx;
      box-sizing: border-box;
      &.active {
        border-bottom: 12rpx solid #eb4450;
      }
    }
  }
}
.content {
  li {
    background-color: #fff;
    margin-top: 30rpx;
    padding: 0 20rpx;
    .goods-info {
      height: 260rpx;
      border-bottom: 1rpx solid #ddd;
      display: flex;
      align-items: center;

      img {
        width: 200rpx;
        height: 200rpx;
        margin-right: 26rpx;
        flex-shrink: 0;
      }
      .right {
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; // 控制多行的行数
          -webkit-box-orient: vertical;
        }
        .price-num {
          margin-top: 84rpx;
          display: flex;
          justify-content: space-between;
          .price {
            color: #eb4450;
          }
        }
      }
    }
    .total-price {
      height: 90rpx;
      line-height: 90rpx;
      border-bottom: 1rpx solid #ddd;
      text-align: right;
      color: #999;
    }
    .order {
      height: 88rpx;
      color: #999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        flex: 1;
        font-size: 14px;
      }
      button {
        width: 160rpx;
        height: 60rpx;
        line-height: 60rpx;
      }
    }
  }
}
</style>