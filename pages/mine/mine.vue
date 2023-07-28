<template>
	<view>
	<view class="info">
		<view class="avatar">
			<image class="img" :src="avatar" mode=""></image>
		</view>
		<view class="info-name">
		<view class="nickname">昵称：{{nickname}}</view>
		<view class="username">用户名：{{username}}</view>
		</view>
		<view v-if="flag" @tap="changeInfo" class="info-change">
			<image class="setting" src="../../static/icons/setting.png" mode=""></image>
		</view>
	</view>
	<view class="order">
		<view class="order-title">我的订单</view>
		<view class="order-line"></view>
		<view class="order-content">
		<view class="pay">
			<image class="img" src="../../static/icons/icon-pay.png" mode=""></image>
		<view class="text">未付款</view>
		</view>
		<view class="pay-done">
			<image class="img" src="../../static/icons/pay-done.png" mode=""></image>
		<view class="text">已付款</view>
		</view>
		<view class="car">
			<image class="img" src="../../static/icons/icon-car.png" mode=""></image>
		<view class="text">已发货</view>
		</view>
		<view class="done">
			<image class="img" src="../../static/icons/icon-done.png" mode=""></image>
		<view class="text">已收获</view>
		</view>
		<view class="after">
			<image class="img" src="../../static/icons/icon-back.png" mode=""></image>
		<view class="text">售后</view>
		</view>
		</view>
	</view>
	<view class="more">
		
		<view class="like content">
			<image class="img" src="../../static/icons/save.png" mode=""></image>
		<view class="text">商品收藏</view>
		</view>
		<view class="brand content">
			<image class="img" src="../../static/icons/brand.png" mode=""></image>
		<view class="text">品牌</view>
		</view>
		<view class=" article content">
			<image class="img" src="../../static/icons/article.png" mode=""></image>
		<view class="text">文章收藏</view>
		</view>
		<view class="address content">
			<image class="img" src="../../static/icons/address.png" mode=""></image>
		<view class="text">地址</view>
		</view>
		<view class="card content">
			<image class="img" src="../../static/icons/card.png" mode=""></image>
		<view class="text">卡包</view>
		</view>
		<view class="cart content">
			<image class="img" src="../../static/icons/cart2.png" mode=""></image>
		<view class="text">购物车</view>
		</view>
		<view class="contact content">
			<image class="img" src="../../static/icons/kf.png" mode=""></image>
		<view class="text">联系客服</view>
		</view>
		<view @tap="setting" class="setting content">
			<image class="img" src="../../static/icons/setting.png" mode=""></image>
			<view class="text">售后</view>
		</view>
	</view>
	</view>
</template>

<script>
	import baseURL from '../../api/baseURL.js'
import {getUserInfo} from '../../api/user/index.js'
import mixin from '../../mixins/index.js'
	export default {
		mixins:[mixin],
		data() {
			return {
				avatar:'',
				username:'',
				nickname:'',
				flag:false
			}
		},
		onLoad(){
			// 如果没有token值，直接返回
			if(!this.checkLogin()){
				return;
			}else{
				this.flag=true
			}
			
		},
		onShow(){
			if(!this.checkLogin()){
				return 
			}else{
				this.flag=true
			}
		 this.getUserInfoList()
			
			
		},
		methods: {
			async getUserInfoList(){
				const res=await getUserInfo()
				console.log('getUserInfo',res);
				this.avatar=res.data.userInfo.icon
		this.username=res.data.userInfo.username
		this.nickname=res.data.userInfo.nickname
			},
			setting(){
				uni.navigateTo({
					url:'/pages/mine/setting/setting'
				})
			},
			changeInfo(){
				uni.navigateTo({
					url:'/pages/mine/changeInfo/changeInfo'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.info{
	position: relative;
	width: 670rpx;
	height: 180rpx;
	margin: 50rpx auto;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	// background-color: #fff;
	.avatar{
		
		width: 150rpx;
		height:150rpx;
		
		.img{
			width: 150rpx;
			height: 150rpx;
			border-radius: 100rpx;
		}
	}
	.info-name{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		width: 500rpx;
		height: 180rpx;
		.nickname{
			width: 500rpx;
			font-size: 36rpx;
			font-weight: 600;
		}
		.username{
			width: 500rpx;
			color: #999999;
            
		}
	}
	.info-change{
		position: absolute;
		right: 20rpx;
		top: 20rpx;
		width: 60rpx;
		height: 60rpx;
		color: #333;
		text-align: center;
		font-size: 28rpx;
		line-height: 50rpx;
		.setting{
			width: 60rpx;
			height: 50rpx;
		}
	}
}
.order{
	width: 670rpx;
	height: 300rpx;
	margin: 0 auto;
padding: 20rpx 30rpx 0 30rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	background-color: #fff;
	border-radius: 20rpx;
	.order-title{
		width: 610rpx;
		height: 30rpx;
	}
	.order-line{
		width: 610rpx;
		height: 2rpx;
		background-color: #000;
		opacity: .3;
		
	}
	.order-content{
		width: 610rpx;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		text-align: center;
		.img{
			width: 50rpx;
			height: 50rpx;
		}
		.text{
			font-size: 28rpx;
		}
		
	}
}
.more{
	width: 670rpx;
	height: 700rpx;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	padding: 40rpx;
	background-color: #fff;
	border-radius: 20rpx;
	margin: 50rpx auto;
	box-sizing: border-box;
	.content{
		width: 33.3%;
		height: 200rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		.img{
			width: 60rpx;
			height: 60rpx;
			margin-bottom: 20rpx;
		}
	}
		

    
}
</style>
