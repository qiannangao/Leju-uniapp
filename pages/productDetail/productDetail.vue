<template>
	<view class="content" v-if="productDetail">
		<swiper class="swiper" indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<view class="swiper-item">
					<image class="img" :src="item" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="text">
			<view class="price">￥{{productDetail.price}}元</view>
			<view class="name">{{productDetail.name}}</view>
		    <view class="detailname">{{productDetail.detailTitle}}</view>
		<uni-icons @tap="collected" type="star" size="50"></uni-icons>
		</view>
		<view class="detail-img" v-html="productDetail.detailMobileHtml"></view>
		
	</view>
</template>

<script>
	import {productDetail} from "../../api/product/index.js"
	export default {
		data() {
			return {
				productId:'',
				productDetail:null,
			}
		},
		onLoad(options){
			console.log('options',options);
			this.productId=options.id;
			this.getproductDetail()
		},
		computed:{
			swiperList(){
				return this.productDetail.albumPics.split(',')
			}
		},
		methods: {
			async getproductDetail(){
				const res=await productDetail(this.productId);
				console.log('productDetail',res);
				this.productDetail=res.data.product;
				// 动态设置当前页面的标题
				uni.setNavigationBarTitle({
					title: this.productDetail.brandName
				});
			}
		},
		collected(){
			console.log(2);
		}
	}
</script>

<style lang="scss" scoped>
.content{
	.swiper{
		width: 750rpx;
		height: 600rpx;
		.swiper-item{
			width: 750rpx;
			height: 600rpx;
		.img{
			width: 100%;
			height: 100%;
		}	
		}
		
	}
	.detail-img{
		width: 100%;
		height: 2000rpx;
		padding: 80rpx;
		box-sizing: border-box;
		// 通过富文本渲染的标签需要使用深度选择器控制样式
		// /deep/或::v-deep
		/deep/ img{
					width: 100%;
					height: auto;
				}	
	}
     
}
</style>
