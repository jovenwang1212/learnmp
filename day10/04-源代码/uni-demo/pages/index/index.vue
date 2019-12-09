<template>
	<div>
		<span>这是一个寂寞的天</span>
		<!-- <a href="https://www.baidu.com">百度</a> -->
		<navigator url="/pages/login/index">百度</navigator>
		<img src="https://img20.360buyimg.com/babel/s590x470_jfs/t1/87008/30/4727/62382/5de86752E9d3253b8/a9928b326cd9a584.jpg.webp" />
		<picker mode="date" :value="date">
			<view class="uni-input">{{date}}</view>
		</picker>
		<ul>
			<li>百度</li>
		</ul>
		<input type="text" value="hello world" />
		<button type="primary" @click="sayHello">点我呀</button>
		<view class="box">
			
		</view>
		<view class="rbox">
			
		</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				date:'2019-12-12'
			}
		},
		onLoad() {

		},
		methods: {
sayHello(){
	uni.showToast({
		title:'点疼我了'
	})
}
		}
	}
</script>

<style>
	.box{
		width: 100px;
		height: 100px;
		background-color: green;
	}
	.rbox{
		width: 200rpx;
		height: 200rpx;
		background-color: green;
	}
	img {
		width: 100px;
		height: 100px;
	}
</style>
