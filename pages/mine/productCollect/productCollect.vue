<template>
	<view>
		<view class="content" v-if="isShowProduct">
			<navigator :url="'../../productDetail/productDetail?id='+item.id" class="item" v-for="item in productCollectList" :key="item.id">
				<image class="img" :src="item.pic" mode=""></image>
				<view class="info">
			    <view class="title">{{item.brandName}}</view>
			    <view class="price">￥{{item.price}}元</view>
				</view>
			</navigator>
		</view>
		<view class="content" v-if="isShowTip">
			暂无收藏，我们去添加吧！
		</view>
	</view>
</template>

<script>
	import mixin from '../../../mixins/index.js'
	export default {
		mixins:[mixin],
		data() {
			return {
				productCollectList:[],
				isShowProduct:false,
				isShowTip:false
				
			}
		},
		onLoad() {
			if(!this.checkLogin())return;
			const collectList=uni.getStorageSync('collectList');
			// 不为空时赋值
			if(!collectList){
				this.isShowTip=true;
				this.isShowProduct=false
			}else{
				this.productCollectList=collectList;
				this.isShowProduct=true
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.content{
	width: 710rpx;
	margin: 30rpx auto;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	.item{
		width: 710rpx;
		height: 300rpx;
		background-color: #fff;
		border-radius: 20rpx;
		padding: 30rpx;
		box-sizing: border-box;
		margin-bottom: 30rpx;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-items: center;
		.img{
			width: 200rpx;
			height: 240rpx;
			border-radius: 30rpx;
		}
		.info{
			margin-left: 30rpx;
			.title{
				width: 300rpx;
				height: 50rpx;
				// margin-left: 50rpx;
			}
			.price{
				float: right;
				width: 200rpx;
				height: 50rpx;
				// margin-left: 50rpx;
				color: #354E44;
				font-size: 36rpx;
			}
		}
		
	}
}
</style>
