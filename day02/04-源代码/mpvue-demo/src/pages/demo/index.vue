<template>
  <div>
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />

    <ul>
      <li v-for="(item, index) in movieList" :key="index">
        {{item}}--{{index}}
      </li>
    </ul>
    <div class="box" :class="{red:isRed}" @click="isRed=!isRed"></div>
    <button @click="sayHello">点我呀</button>
    <swiper indicator-dots autoplay circular>
        <block v-for="(item, index) in 10" :key="index">
            <swiper-item>
                <img src="https://img14.360buyimg.com/babel/s590x470_jfs/t1/67604/35/15331/96160/5dcd16e2E1da3c629/86b664493b17a502.jpg.webp" alt="">
            </swiper-item>
        </block>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '是兄弟就一起玩贪玩蓝月',
      movieList: [
        "两只老虎",
        '冰雪奇缘',
        '海上钢琴师',
        '哪扎'
      ],
      isRed: true
    }
  },
  methods: {
    sayHello () {
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
    border:1px solid #ccc;
    border-radius: 50%;
  }
  .red{
    background-color: red;
  }
</style>
