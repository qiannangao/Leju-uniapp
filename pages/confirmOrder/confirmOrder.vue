<template>
	<view>
		<view class="buy">等待买家付款</view>
		<navigator class="address" v-if="address.name" url="../address/address">
			<view class="name">姓名：{{address.name}}</view>
			<view class="phone">手机号：{{address.phoneNumber}}</view>
			<view class="address-detail">详细地址：{{address.province}}-{{address.city}}-{{address.region}}</view>

		</navigator>
		<navigator v-else class="choose-address" open-type="navigate" url="../address/address">去选择收货地址</navigator>

		<view class="order">
			<view class="order-number">订单编号：{{orderNum}}</view>
			<view class="line"></view>
			<view class="order-content">
				<view class="img">
					<image class="order-img" :src="orderContent.productPic" mode=""></image>
				</view>
				<view class="info">
					<view class="name">{{orderContent.productName}}</view>
					<view class="price">￥{{orderContent.productPrice}}元</view>
					<view class="specification">{{orderContent.productAttr|formatData}}</view>
				</view>

			</view>
			<view class="line"></view>
			<view class="bottom">
				<view class="total">合计￥{{orderContent.totalPrice}}元</view>
				<view @tap="getaddPreOrder" class="buy">继续付款</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getPreOrder,
		addPreOrder
	} from '../../api/confirmOrder/index.js'
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				orderId: '',
				orderNum: '',
				orderContent: ''
			}
		},
		onLoad(options) {
			console.log(options);
			this.orderId = options.id;
			this.getPreOrderList()
		},
		computed: {
			...mapState(['address'])
		},
		filters: {
			formatData(value) {
				let str = '';
				try {
					let Arr = JSON.parse(value)
					Arr.forEach(item => {
						str += ';' + item.key + ':' + item.value
					})
					str = str.substring(1)

				} catch (e) {
					return value;
					//TODO handle the exception
				}
				return str;
			}
		},
		methods: {
			async getPreOrderList() {
				const res = await getPreOrder(this.orderId)
				this.orderNum = res.data.orderBase.orderSn;
				this.orderContent = res.data.orderItems[0]
				console.log('getPreOrder', res);
			},
			async getaddPreOrder(){
				const res=await addPreOrder(
				{
					"addressId":this.address.id,
				  "orderId": this.orderId,
				  "orderItemList": [
				    {
				      "productId": this.orderContent.productId,
				      "productQuantity": this.orderContent.productQuantity,
				      "productSkuId": this.orderContent.productSkuId
				    }
				  ],

				}
				)
				if(res.success){
					uni.navigateTo({
						url:`/pages/confirmOrder/pay/pay?id=${res.data.orderId}`
					})
				}
				console.log('addPreOrder',res);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.address {
		width: 670rpx;
		height: 200rpx;
		background-color: #fff;
		margin: 30rpx auto;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		border-radius: 10rpx;
		.name{
			width: 670rpx;
			height: 50rpx;
			font-size: 36rpx;
			
		}
		.phone{
			width: 670rpx;
			height: 30rpx;
			color: grey;
		}
		.address-detail{
			width: 670rpx;
			height: 30rpx;
		}

	}

	.order {
		width: 670rpx;
		height: 1000rpx;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		margin: 20rpx auto;
		border-radius: 10rpx;
		color: #747575;

		.line {
			width: 610rpx;
			height: 2rpx;
			background-color: grey;
			margin: 30rpx auto;
		}

		.order-number {
			width: 610rpx;
			height: 80rpx;

		}

		.order-content {
			width: 610rpx;
			height: 200rpx;
			display: flex;
			justify-content: space-between;

			.order-img {

				width: 200rpx;
				height: 200rpx;
			}

			.info {
				width: 400rpx;
				height: 200rpx;
				padding: 30rpx;
				box-sizing: border-box;
				display: flex;
				flex-wrap: wrap;

				.name {
					width: 400rpx;
					height: 50rpx;
					font-size: 36rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.price {
					width: 400rpx;
					height: 50rpx;
				}

				.specification {
					width: 400rpx;
					height: 50rpx;
					color: #999DA2;
				}
			}

		}

		.bottom {
			width: 610rpx;
			height: 200rpx;

			.total {
				width: 610rpx;
				height: 50rpx;
				text-align: right;
			}

			.buy {
				float: right;
				width: 80px;
				height: 50rpx;
				border: 1px solid #000;
				border-radius: 10rpx;
				color: #555B58;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>