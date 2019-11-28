<template>
	<view class="">
		<!-- div和view都可以使用 -->
		<div class="">
			hello world
		</div>
		<!-- text或者span -->
		<text>这是一个安眠药</text><span>这是一个寂寞的天</span>
		<a href="https://www.baidu.com">百度</a>
		<navigator url="https://www.baidu.com">百度</navigator>
		<!-- 图片的显示 -->
		<img src="https://img20.360buyimg.com/babel/s590x470_jfs/t1/56862/31/15460/72385/5dc543adE1918ee06/847522b02c3d3211.jpg.webp"
		 mode="" />



		<ul>
			<li>百度</li>
			<li>百度2</li>
			<li>百度3</li>
		</ul>

		<input type="text" value="hello" />
		<button type="primary">这是一个基本按钮</button>
		<label>
			<checkbox value="2" />2<text></text>
		</label>
		<input type="checkbox" value="2" />
		<text>日期选择</text>
		<picker mode="date" :value="date" start="2007-1-1" end="2019-1-1">
			<view class="uni-input">{{date}}</view>
		</picker>
		
		<button type="primary" @click="sayHello">点我呀</button>
		<view class="box">
		</view>
		<view class="rbox">
		</view>
	</view>



</template>

<script>
	export default {
		data(){
			return{
				date:'2015-1-1'
			}
		},
		methods:{
			sayHello(){
				// wx.showToast({
				// 	title:'这是一个安眠药'
				// })
				uni.showToast({
					title: '这是一个安眠药'
				});
			}
		}
	}
</script>

<style>
	input {
		border: 1px solid #4CD964;
	}
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
</style>
