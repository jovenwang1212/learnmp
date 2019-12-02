<template>
  <div>
    <swiper
      circular
      autoplay
      indicator-dots
      interval="1000"
    >
      <swiper-item v-for="item in hero.bgs" :key="item">
        <image :src="item"></image>
      </swiper-item>
    </swiper>

    <view class="content">
      <view class="left">
        <view class="title">{{ hero.title }}</view>
        <view class="name">{{ hero.name }}</view>
        <!-- 英雄标签 -->
        <view class="tags">
          <text v-for="item in hero.tags" :key="item">{{ item }}</text>
        </view>
        <view class="ability">
          <view class="item">
            <text>生存能力</text>
            <progress
              :percent="hero.Ability.life"
              activeColor="#1ec76b"
              active
              stroke-width="12"
              backgroundColor="#363636"
            ></progress>
          </view>
          <view class="item">
            <text>物理攻击</text>
            <progress
              :percent="hero.Ability.physical"
              activeColor="#f2c40c"
              active
              stroke-width="12"
              backgroundColor="#363636"
            ></progress>
          </view>
          <view class="item">
            <text>魔法攻击</text>
            <progress
              :percent="hero.Ability.magic"
              activeColor="#f2a709"
              active
              stroke-width="12"
              backgroundColor="#363636"
            ></progress>
          </view>
          <view class="item">
            <text>操作难度</text>
            <progress
              :percent="hero.Ability.difficulty"
              activeColor="#cb8eff"
              active
              stroke-width="12"
              backgroundColor="#363636"
            ></progress>
          </view>
        </view>
      </view>
      <!-- 能力 -->
      <view class="right">
        {{ hero.story }}
      </view>
    </view>
  </div>
</template>

<script>
// /*eslint-disable*/
import heroDetailList from '@/data/lol_details_duowan'
export default {
  data () {
    return {
      hero: {}
    }
  },
  onLoad (options) {
    this.hero = heroDetailList.find(v => v.id === options.id)
    wx.setNavigationBarTitle({ title: `${this.hero.title}-${this.hero.name}` })
  }
}
</script>

<style>
page {
  background-color: #363636;
}

image {
  width: 100%;
}

.content {
  display: flex;
  padding: 12px 10px 0;
  color: #fff;
  font-size: 12px;
}

.left {
  width: 191px;
}
.right {
  flex: 1;
}
.tags text {
  width: 30px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background-color: #029b7f;
  display: inline-block;
  border-radius: 4px;
  margin-right: 4px;
}
.title {
  font-size: 14px;
}

.name {
  font-size: 20px;
  margin-bottom: 12px;
}

.ability {
  margin-top: 18px;
}

.ability .item {
  display: flex;
}
.ability .item progress {
  width: 100px;
  margin-left: 6px;
}
</style>
