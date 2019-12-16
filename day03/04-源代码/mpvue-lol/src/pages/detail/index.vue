<template>
  <div>
    <swiper indicator-dots
            autoplay
            circular>
      <block v-for="item in hero.bgs"
             :key="item">
        <swiper-item>
          <image :src="item"></image>
        </swiper-item>
      </block>
    </swiper>

    <view class="content">
      <view class="left">
        <view class="title">{{hero.title}}</view>
        <view class="name">{{hero.name}}</view>

        <view class="tags">
          <text v-for="item in hero.tags"
                :key="item">{{item}}</text>
        </view>

        <view class="ability">
          <view class="item">
            <text>生存能力</text>
            <progress :percent="hero.Ability.life"
                      stroke-width="12"
                      activeColor="#1ec76b"
                      backgroundColor="#363636"
                      active></progress>
          </view>
          <view class="item">
            <text>物理攻击</text>
            <progress :percent="hero.Ability.physical"
                      stroke-width="12"
                      activeColor="#f2c40c"
                      backgroundColor="#363636"
                      active></progress>
          </view>
          <view class="item">
            <text>魔法攻击</text>
            <progress :percent="hero.Ability.magic"
                      stroke-width="12"
                      activeColor="#f2a709"
                      backgroundColor="#363636"
                      active></progress>
          </view>
          <view class="item">
            <text>操作难度</text>
            <progress :percent="hero.Ability.difficulty"
                      stroke-width="12"
                      activeColor="#cb8eff"
                      backgroundColor="#363636"
                      active></progress>
          </view>
        </view>

      </view>
      <view class="right">
        {{hero.story}}
      </view>
    </view>
  </div>
</template>

<script>
import heroDetailList from '../../data/lol_details_duowan'
export default {
  data () {
    return {
      hero: {
        a: true
      }
    }
  },
  onLoad (options) {
    console.log(options.id)
    let id = options.id

    // 查找heroDetailList里面id相同的那一项
    this.hero = heroDetailList.find(v => {
      return v.id === id
    })
    wx.setNavigationBarTitle({ title: `${this.hero.title}-${this.hero.name}` })
  }
}
</script>

<style>
page {
  background-color: #363636;
  color: #fff;
  font-size: 12px;
}

swiper image {
  width: 100%;
}

.content {
  display: flex;
  padding: 12px 10px 0;
}

.content .left {
  width: 191px;
}

.content .right {
  flex: 1;
}

.tags {
  margin: 12px 0 18px;
}

.tags text {
  width: 30px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background-color: #029b7f;
  border-radius: 4px;
  margin-right: 4px;
  display: inline-block;
}

.title {
  font-size: 14px;
}
.name {
  font-size: 20px;
  margin-top: 4px;
}

.ability .item {
  display: flex;
  margin-bottom: 4px;
}

progress {
  width: 100px;
  margin-left: 6px;
}
</style>