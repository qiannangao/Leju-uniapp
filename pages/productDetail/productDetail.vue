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
			<uni-icons @tap="collected" type="star" size="50" :color="isCollect?'#f00':'#999'"></uni-icons>
		</view>
		<view class="detail-img" v-html="productDetail.detailMobileHtml"></view>
		<view class="more">
			<view class="addCart" @tap="doProductChange('cart')">加入购物车</view>
			<view class="buy" @tap="doProductChange('buy')">立即购买</view>
		</view>
		<div class="mask" v-if="isMaskShow" @tap.self='close'>
			<view class="top" v-if="skuList">
				<image @tap="close" class="cancel" src="../../static/icons/x.png" mode=""></image>
				<image class="pic" :src="skuList[current].pic" mode=""></image>
				<view class="title">{{productDetail.name}}</view>
				<view class="inventory">库存数量：{{skuList[current].stock}}</view>
			</view>
			<view class="mask-content">
				<view class="box-top">


				</view>
				<view class="choose">
					<view class="title">商品选择</view>
					<view @tap="changePic(index)" class="text" :class="current==index?'border':''"
						v-for="(item,index) in skuList" :key="item.id">
						{{item.spData|formatSpData}}
					</view>

				</view>
				<view class="choose">
					<view class="title">特色服务</view>
					<view class="text">送货上门</view>
					<view class="text">上门安装</view>
				</view>
				<view class="buy">
					<view class="title">购买数量</view>
					<view class="number">
						<view @tap="subNum" class="sub">-</view>
						<view class="num">{{num}}</view>
						<view @tap="addNum" class="add">+</view>
					</view>
				</view>
				<view class="sure" @tap="doSubmit">确定</view>
			</view>
		</div>
	</view>
</template>

<script>
	import mixin from '../../mixins/index.js'
	import {
		productDetail,
		addCart,
		addPreorder
	} from "../../api/product/index.js"
	export default {
		mixins: [mixin],
		data() {
			return {
				productId: '',
				productDetail: null,
				isCollect: false,
				isMaskShow: false,
				skuList: null,
				current: 0,
				num: 1,
				flag: ''
			}
		},
		onLoad(options) {
			console.log('options', options);
			this.productId = options.id;
			this.getproductDetail()
			const collectList = uni.getStorageSync('collectList')
			if (!collectList) {
				this.isCollect = false;
			} else {
				// 存在收藏列表
				let item = collectList.find(item =>
					item.id == this.productId
				)
				if (item) {
					this.isCollect = true
				} else {
					this.isCollect = false
				}
			}
		},
		filters: {
			formatSpData(value) {
				let str = '';
				try {
					let Arr = JSON.parse(value)
					// [{key: '颜色', value: '现代黑'},{...}]

					Arr.forEach(item => {
						str += ',' + item.key + ':' + item.value;
					})
					str = str.substring(1)
					console.log('str', str);
				} catch (e) {
					console.log(e);
					return value;
					//TODO handle the exception
				}
				return str;
			}
		},
		computed: {
			swiperList() {
				return this.productDetail.albumPics.split(',')
			}
		},
		methods: {
			async getproductDetail() {
				const res = await productDetail(this.productId);
				console.log('productDetail', res);
				this.productDetail = res.data.product;
				// 动态设置当前页面的标题
				uni.setNavigationBarTitle({
					title: this.productDetail.brandName
				});
			},
			collected() {
				// 未登录不能收藏
				if (!this.checkLogin()) {
					return
				}
				// 如果登陆了，先从本地获取收藏的商品
				const collectList = uni.getStorageSync('collectList')
				if (!collectList) {
					// 如果没有收藏，直接存储
					uni.setStorageSync("collectList", [this.productDetail])
					this.isCollect = true;
					uni.showToast({
						title: '收藏成功'
					})
				} else {
					// 如果有收藏，则push进数组里
					// 同时要判断是否已有该id，已有则不重复push
					// find会返回数组中符合条件的第一个值，在数组中找到的话则不会往下执行。 如果数组中没有符合条件的值则返回undefined **
					let item = collectList.find(item => item.id == this.productDetail.id)
					if (item) {
						// 已存在,删除
						let index = collectList.findIndex(item => item.id == this.productDetail.id)
						collectList.splice(index, 1)
						this.isCollect = false;
						uni.showToast({
							title: '已取消收藏'
						})
					} else {
						collectList.push(this.productDetail)
						this.isCollect = true;
						uni.showToast({
							title: '收藏成功'
						})
					}

					console.log(collectList);
					// 直接push时，本地存储内不显示,应把添加的新数组存储进去·
					uni.setStorageSync('collectList', collectList)
				}
				console.log(111);
				// uni.setStorageSync('token',this.productId)
			},
			doProductChange(flag) {
				this.isMaskShow = true
				// console.log(this.productDetail.skuList);
				this.skuList = this.productDetail.skuList;
				this.flag = flag
			},
			close() {
				this.isMaskShow = false
			},
			changePic(index) {
				this.current = index

			},
			subNum() {
				this.num--;
				if (this.num < 1) {
					uni.showToast({
						title: '最少选择一件商品'
					})
					this.num = 1
				} else {}
			},
			addNum() {
				this.num++
			},
			async doSubmit() {
				if (!this.checkLogin()) return;
				if (this.flag == 'cart') {
					const res = await addCart({
						"productId": this.productId,
						"productSkuId": this.productDetail.skuList[this.current].id,
						"quantity": this.num
					})
					console.log('addCart', res);
					if(res.success){
						uni.showToast({
							title: '添加成功'
						})
						this.isMaskShow=false 
					}
				} else if (this.flag == 'buy') {
					const res = await addPreorder({
						"orderItemList": [{
							"productId": this.productId,
							"productQuantity": this.num,
							"productSkuId": this.productDetail.skuList[this.current].id,
						}]
					})
					if (res.success) {
						uni.showToast({
							title: '1s后跳转至订单确认页'
						})
						setTimeout(() =>
							uni.navigateTo({
								url: `/pages/confirmOrder/confirmOrder?id=${res.data.orderId}`
							}), 1000)

					}
					console.log('addPreorder', res);
				}

			}
		},

	}
</script>

<style lang="scss" scoped>
	.content {
		.swiper {
			width: 750rpx;
			height: 600rpx;

			.swiper-item {
				width: 750rpx;
				height: 600rpx;

				.img {
					width: 100%;
					height: 100%;
				}
			}

		}

		.detail-img {
			width: 100%;
			height: 2000rpx;
			padding: 80rpx;
			box-sizing: border-box;

			// 通过富文本渲染的标签需要使用深度选择器控制样式
			// /deep/或::v-deep
			/deep/ img {
				width: 100%;
				height: auto;
			}
		}

		.more {
			position: fixed;
			bottom: 0;
			right: 0;
			width: 750rpx;
			height: 100rpx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			font-size: 36rpx;
			font-weight: 500;
			background-color: #fff;

			.addCart {
				width: 250rpx;
				height: 80rpx;
				background-color: #E2E2E2;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.buy {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 250rpx;
				height: 80rpx;
				background-color: #354E44;
				color: #fff;
				margin-right: 20rpx;
			}
		}

		.mask {
			position: fixed;
			left: 0;
			right:0;
			top: 0;
			bottom: 0;
			// width: 750rpx;
			// height: 100%;
			background-color: #6F7072;

			.top {
				background-color: #fff;
				position: fixed;
				left: 80rpx;
				top: 225rpx;
				width: 580rpx;
				height: 200rpx;
				z-index: 10;
				padding: 0 40rpx 0 0rpx;
				box-sizing: border-box;

				.cancel {
					position: absolute;
					right: 8rpx;
					top: -5rpx;
					width: 50rpx;
					height: 50rpx;
				}

				.pic {
					width: 200rpx;
					height: 200rpx;
					position: relative;
					left: 42rpx;
					top: -50rpx;
					border-radius: 30rpx;
					z-index: 10;
				}

				.title {
					float: right;
					width: 250rpx;
					height: 50rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-weight: 600;
					margin-top: 50rpx;
				}

				.inventory {
					float: right;
					margin: -100rpx 0rpx 10rpx 200rpx;
					width: 250rpx;
					height: 30rpx;
					font-size: 28rpx;
					color: #9FB2BF;
				}
			}

			.mask-content {
				overflow-y: scroll;
				position: absolute;
				right: 50%;
				top: 200rpx;
				transform: translate(50%, 0);
				width: 600rpx;
				height: 1050rpx;
				background-color: #fff;
				border-radius: 40rpx;
				padding: 40rpx;
				box-sizing: border-box;

				.box-top {
					width: 500rpx;
					height: 200rpx;

				}

				.choose {
					width: 500rpx;

					// height: 300rpx;
					.border {
						border: 2px solid #354E44;
					}

					.title {
						font-size: 36rpx;
						font-weight: 600;
						margin-bottom: 30rpx;
					}

					.text {
						width: 500rpx;
						height: 80rpx;
						background-color: #F1F4F3;
						border-radius: 20rpx;
						margin-bottom: 20rpx;
						text-align: center;
						line-height: 80rpx;
					}
				}

				.buy {

					width: 500rpx;
					height: 80rpx;
					display: flex;
					justify-content: space-between;

					.title {

						width: 200rpx;
						height: 80rpx;
						font-size: 36rpx;
						font-weight: 600;
						margin-bottom: 30rpx;
						line-height: 80rpx;
					}

					.number {
						float: right;
						width: 300rpx;
						height: 80rpx;
						display: flex;
						justify-content: space-between;
						font-size: 40rpx;

						.sub,
						.num,
						.add {
							width: 70rpx;
							height: 70rpx;
							background-color: #F3EDE7;
							border-radius: 50rpx;
							display: flex;
							justify-content: center;
							align-items: center;
						}

						.num {
							width: 100rpx;

						}

					}

				}

				.sure {
					width: 200rpx;
					height: 80rpx;
					background-color: #344B44;
					color: #fff;
					border-radius: 30rpx;
					font-size: 36rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 30rpx auto;
				}
			}
		}

	}
</style>