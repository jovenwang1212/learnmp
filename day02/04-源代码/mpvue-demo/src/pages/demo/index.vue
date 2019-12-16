<template>
  <div>
    <h2>{{message}}</h2>
    <input type="text"
           v-model="message">
    <ul>
      <li v-for="(item, index) in songList" :key="index">{{item}}--{{index}}</li>
    </ul>
    <div class="box" :class="{'red':isRed}" @click="isRed=!isRed"></div>
    <button @click="sayHello">点我呀</button>
    <swiper indicator-dots autoplay circular>
        <block v-for="(item, index) in 10" :key="index">
            <swiper-item>
                <image mode="aspectFill" :src="imgUrl"></image>
            </swiper-item>
        </block>
    </swiper>
  </div>
</template>

<script>
export default {
  data (){
    return {
      message: '中分还带波浪，是不是很萌',
      songList: [
        '两只蝴蝶1',
        '两只蝴蝶2',
        '两只蝴蝶3',
        '两只蝴蝶4'
      ],
      isRed: true,
      imgUrl: 'https://img10.360buyimg.com/babel/s590x470_jfs/t1/93139/3/4796/84961/5de8d7cdE3c1c4173/3c43b16e6dba945f.jpg.webp'
    }
  },
  methods: {
    sayHello () {
      // wx对象依然能够使用
      wx.showToast({
        title: '点疼我了'
      })
    }
  }
}
</script>

<style>
  .box{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border:1px solid green;
  }
  .red{
    background-color: red;
  }
</style>