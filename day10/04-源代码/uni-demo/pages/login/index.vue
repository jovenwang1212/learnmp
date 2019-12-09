<template>
	<view class="">
		<view class="box" :class="{'green':isGreen}" @click="isGreen=!isGreen">
			
		</view>
		
		<text>{{msg}}</text>
		<input type="text" v-model="msg" />
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isGreen:true,
				msg:'这是一个寂寞的天'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
.box{
	width: 100px;
	height: 100px;
	border:1px solid #ccc;
	border-radius: 50px;
}
.green{
	background-color: green;
}
</style>
