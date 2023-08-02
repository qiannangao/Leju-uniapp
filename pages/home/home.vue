<template>
	<view class="content">
		
	<view class="banner" >
		<swiper class="swiper" :indicator-dots="true" indicator-active-color="#fff" autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in bannerList" :key="item.id">
				<view class="swiper-item">
					<image :src="item.pic" mode=""></image>
				</view>
			</swiper-item>
	
		</swiper>
		<view class="search">
			<image src="../../static/icons/search.png" mode=""></image>
		</view>
		<div class="cart">
			<image src="../../static/icons/cart.png" mode=""></image>
		</div>
	</view>
	<view class="categories">
		<view class="category" v-for="item in categoryList" :key="item.id">
			<image :src="item.icon" mode=""></image>
		<view class="text">{{item.name}}</view>
		</view>
		
		
	</view>
	<!-- 限时活动 -->
	<view class="limited">
		<image class="laba" src="../../static/icons/laba.png" mode=""></image>
		<text class="text">限时活动</text>
		<swiper class="swiper" autoplay="true" :interval="3000" :duration="1000" vertical="true">
			<swiper-item v-for="item in limitActivity" :key="item.id">
				<view class="swiper-item">
					<view class="swiper-name">{{item.name}}</view>
					<view class="swiper-price">现价￥{{item.price}}元</view>
				</view>
			</swiper-item>
			
		</swiper>
	</view>
	<!-- 热门推荐 -->
	<view class="hot">
        <view class="hot-title">热门推荐</view>
		<view class="hot-content">
			<view class="hot-item" v-for="item in hotList" :key="item.id">
				<image :src="item.pic" mode=""></image>
				<view class="hot-name">{{item.brandName}}</view>
				
			</view>
		</view>
	</view>
	
	<!-- 新品 -->
	<view class="latest">
	    <view class="latest-title">新品推荐</view>
		<scroll-view class="latest-content" scroll-x="true" >
		
			<view class="latest-item" v-for="item in latestList" :key="item.id">
				<image :src="item.pic" mode=""></image>
				<view class="latest-name">{{item.name}}</view>
			</view>
			
		</scroll-view>
		
	</view>
	<!-- 猜你喜欢 -->
	<view class="like">
		<view class="like-title">猜你喜欢</view>
		<view class="like-content">
			<view class="like-item" v-for="item in likeList" :key="item.id">
				<image :src="item.pic" mode=""></image>
				<view class="like-text">
					<view class="like-name">{{item.brandName}}</view>
					<text class="like-price">￥{{item.price}}元</text>
					<text class="like-cate">{{item.productCategoryName}}</text>
				</view>
				
			</view>
		</view>
	</view>
	
	</view>
</template>

<script>
	import {bannerAds,productDetail,findCategory,hotList,latestList,likeList,limitActivity} from '@/api/home/index.js'
	export default {
		data() {
			return {
				bannerList:'',
				height:0,
				hotList:'',
				latestList:'',
				likeList:'',
				categoryList:'',
				limitActivity:[
					{
						id:1,
						name:'创意沙发椅',
						price:'999'
					},
					{
						id:2,
						name:'红木床头柜',
						price:'887'
					},
					{
						id:3,
						name:'实木地板',
						price:'799'
					}
				]
			}
		},
		onLoad(options) {
			this.getBannerList();
			this.getfindCategory()
			this.gethotList()
			this.getlatestList()
			this.getlikeList()
			this.getlimitActivity()
			// // #ifdef MP-WEIXIN
			// const res=uni.getMenuButtonBoundingClientRect()
			// console.log('按钮',res);
			// this.height=res.height+res.top
			// // #endif
			
		},
		methods: {
	async getBannerList(){
		const res=await bannerAds()
		console.log('bannerAds',res)
		this.bannerList=res.data.items
	},
	async getProductDetail(){
		const res=await productDetail()
		// this.bannerList=res.data.items
	},
	async getfindCategory(){
		const res=await findCategory("1308336521604599809")
		console.log('home-category',res);
		this.categoryList=res.data.category.children
	},
	async gethotList(){
		const res=await hotList();
		console.log('hotList',res);
		this.hotList=res.data.items
	},
	async getlatestList(){
		const res=await latestList();
		console.log('latestlist',res);
		this.latestList=res.data.productList
	},
	async getlikeList(){
		const res=await likeList()
		console.log('likeList',res);
		this.likeList=res.data.items
	},
	async getlimitActivity(){
		const res=await limitActivity();
		console.log('limitActivity',res);
	}
	
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../css/common.scss");
	.banner{
		position: relative;
		width: 750rpx;
		height: 400rpx;
		background: #5D4E49;
		border-radius: 0 0 30px 30px;
		.swiper{
			height: 400rpx;
			
			image{
				width: 750rpx;
				height: 400rpx;
				border-radius: 0 0 30rpx 30rpx
			}
		}
		.search{
			position: absolute;
			right: 100rpx;
			top: 80rpx;
			width: 46rpx;
			height: 46rpx;
			image{
				width: 46rpx;
				height: 46rpx;
			}
		}
		.cart{
			position: absolute;
			right: 32rpx;
			top: 80rpx;
			width: 46rpx;
			height: 46rpx;
			image{
				width: 46rpx;
				height: 46rpx;
			}
		}
		
	}
	.categories{
		width: 750rpx;
		height: 130rpx;
		display: flex;
justify-content: space-around;
	margin-top: 100rpx;
	text-align: center;
.category{

	width: 100rpx;
	height: 70rpx;
	image{
		width: 100rpx;
		height: 70rpx;
	}
}
	}
	.limited{
		width: 670rpx;
		height: 100rpx;
		background-color: #fff;
		font-weight: 500;
		margin: 50rpx auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 20rpx;
		box-sizing: border-box;
		.laba{
			width: 60rpx;
			height: 60rpx;
		}
		.text{
			margin-left: 10rpx;
			font-weight: 600;
			color:#FF8B01;
		}
		.swiper{
			width: 400rpx;
			height: 60rpx;
			color: #333;
			display: flex;
			align-items: center;
			.swiper-item{
				width: 100%;
				height: 60rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.swiper-name{
					margin-left: 30rpx;
				}
				.swiper-price{
					color: #f00;
				}
			}
		}
	}
	.hot{
		width: 670rpx;
		height: 250rpx;
		margin: 0 auto;
		// background-color:lightpink;
	.hot-title{
		// font-size: 22rpx;
		font-weight: 600;
		margin-bottom: 20rpx;
	}
	.hot-content{
		display: flex;
		justify-content: flex-start;
	.hot-item{
		width: 200rpx;
		height: 150rpx;
		margin-right: 30rpx;
		// background-color: skyblue;
		image{
			width: 200rpx;
			height: 120rpx;
			border-radius: 10rpx;
		}
		.hot-name{
			width: 200rpx;
			height: 45rpx;
			font-weight:500;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			
		}
	}
	}
	}
	.latest{
		width: 700rpx;
		// margin: 50rpx 40rpx 60rpx;
		margin-left: 40rpx;
		margin-bottom: 60rpx;
		.latest-title{
			font-weight: 600;
			margin-bottom: 20rpx;
		}
		.latest-content{
			width: 100%;
			height: 260rpx;
			white-space: nowrap;
		
		.latest-item{
			display: inline-block;
			width: 580rpx;
			
			height: 260rpx;
			background-color: #fff;
			padding: 30rpx;
			box-sizing: border-box;
			border-radius: 20rpx;
			margin-right: 30rpx;
			image{
				float: left;
	           
				width: 200rpx;
				height: 100%;
				border-radius: 10rpx;
			}
			.latest-name{
				float: right;
				width: 300rpx;
				height: 200rpx;
				font-weight:400;
				
				text-overflow: ellipsis;
						overflow: hidden;
				white-space: nowrap;
			}
		}
		
		}
	}
.like{
		width: 670rpx;
		height: 1000rpx;
		margin: 0 auto;
	
	.like-title{
		// font-size: 22rpx;
		font-weight: 600;
		margin-bottom: 20rpx;
	}
	.like-content{
		width: 670rpx;
		height: 1000rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.like-item{
			width: 310rpx;
			height: 400rpx;
			background-color: #fff;
			border-radius: 15rpx;
			
			margin-bottom: 50rpx;
			display: flex;
			align-content: flex-start;
			flex-wrap: wrap;
			image{
				width: 310rpx;
				height: 200rpx;
				border-radius: 10rpx 10rpx 0 0;
				margin-bottom: 40rpx;
			}
			.like-text{
				width: 310rpx;
				height: 150rpx;
				padding: 20rpx;
				box-sizing: border-box;
				.like-name{
					font-weight:600;
					
					margin-bottom: 20rpx;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
				.like-price{
					float: left;
				}
				.like-cate{
					float: right;
				}
			}
		}
	}
	}
</style>