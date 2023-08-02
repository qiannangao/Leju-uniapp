<template>
	<view>
		<view class="title">
			<view @tap="tabChange(index)" class="item" :class="current==index?'red':''" v-for="(item,index) in tabList"
				:key="item.id">
				{{item.text}}
			</view>
		</view>
		<view class="content" v-if="orderList">
			<view v-if="current!=4" class="order" v-for="item in list" :key="item.order.id">
				<view class="top">
					<view class="order-num">订单编号：{{item.order.orderSn}}</view>
					<view class="status">{{item.order.status|statusText}}</view>
				</view>
				<view class="line"></view>
				<view class="item" v-for="item2 in item.items" :key="item2.id">
					<image class="img" :src="item2.productPic" mode=""></image>
					<view class="detail">
						<view class="name">{{item2.productName}}</view>
						<view class="card">编号：{{item2.cartId}}</view>
						<view class="guige">规格：{{item2.productAttr|formatArr}}</view>
						<view class="price">￥{{item2.productPrice}}</view>
						<view class="num">x{{item2.productQuantity}}</view>
					</view>
					<view class="btn" v-if="item.order.status==2" >退货</view>
				</view>
				<view class="line"></view>
				<view class="bottom">
					<view class="time">时间：{{item.order.createTime}}</view>
					<view class="totalPrice">合计￥{{item.order.totalAmount}}</view>
					<view @tap="cancel(item.order.id)" v-if="item.order.status==0" class="cancel">取消订单</view>
					<view @tap="buy(item)" v-if="item.order.status==0" class="pay">付款</view>
					<view class="confirm" v-if="item.order.status==2">确认收货</view>
				    <view class="del" v-if="item.order.status==3||item.order.status==4">删除记录</view>
				</view>
			</view>
			<!-- 当订单的status为4时，显示售后二字 -->
			<view v-else class="after">
				<view class="order" v-for="item in returnList" :key="item.id">
					<view class="top">
						<view class="order-num">订单编号：{{item.orderSn}}</view>
						<view class="status">{{item.status|orderProcessText}}</view>
					</view>
					<view class="line"></view>
					<view class="item">
						<image class="img" :src="item.productPic" mode=""></image>
						<view class="detail">
							<view class="name">{{item.productName}}</view>
							<view class="card">编号：{{item.cartId}}</view>
							<view class="guige">规格：{{item.productAttr|formatArr}}</view>
							<view class="price">￥{{item.productPrice}}</view>
							<view class="num">x{{item.productCount}}</view>
						</view>
					</view>
					<view class="line"></view>
					<view class="bottom">
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		findAllOrders,
		orderReturnApplys,
		cancelOrder
	} from '../../../api/user/index.js'
	import {addPreorder} from '../../../api/product/index.js'
	export default {
		data() {
			return {
				current: 0,
				orderList: '',
				returnList: '',
				tabList: [{
						id: 1,
						text: '待付款'
					},
					{
						id: 2,
						text: '已付款'
					},
					{
						id: 3,
						text: '已发货'
					},
					{
						id: 4,
						text: '已收货'
					},
					{
						id: 5,
						text: '售后'
					}
				]
			}
		},
		onLoad() {
			this.getfindAllOrders()
			this.getorderReturnApplys()
		},
		filters: {
			formatArr(value) {
				let str = '';
				try {
					let Arr = JSON.parse(value)
					Arr.forEach(item => {
						str += ',' + item.key + ':' + item.value
					})
					str = str.substring(1)
				} catch (e) {
					return value;
					//TODO handle the exception
				}
				return str;
			},

			statusText(val) {
				if (val == 0) {
					return "未付款"
				} else if (val == 1) {
					return "确认付款,等待发货"
				} else if (val == 2) {
					return "已发货"
				} else if (val == 3) {
					return "已收货"
				} else if (val == 4) {
					return "已退单"
				} else {
					return "无效订单"
				}
			},
			//已退款和已拒绝颜色需要展示成红色
			orderProcessText(process) {
				var text = '等待处理';
				switch (JSON.stringify(process)) {
					case '0':
						text = '等待处理';
						break;
					case '1':
						text = '确认退货,等待用户发货';
						break;
					case '2':
						text = '已退款';
						break;
					case '3':
						text = '已拒绝';
						break;
					case '9':
						text = '拒绝退货';
						break;
					default:
						break;
				}
				return text;
			}

		},
		computed: {
			list() {
				if (this.current == 3) {
					return this.orderList.filter(item => item.order.status == this.current || item.order.status == 4)

				} else {
					return this.orderList.filter(item => item.order.status == this.current)
				}

			}
		},
		methods: {
			tabChange(idx) {
				this.current = idx
			},
			async getfindAllOrders() {
				const res = await findAllOrders()
				console.log('findAllOrders', res);
				this.orderList = res.data.orderList;
			},
			async getorderReturnApplys() {
				const res = await orderReturnApplys()
				console.log('returnOrder', res);
				this.returnList = res.data.items
			},
			cancel(id){
				const orderId=id;
				const res=cancelOrder(orderId)
				console.log('cancelOrder',res);
				// if(res.status==200){
				// 	console.log(111);
				// }
				
			},
		   async buy(n){
			   let item=n;
				const res = await addPreorder({
					"orderItemList": [{
						"cartId": item.items[0].cartId,
						"productId": item.items[0].productId,
						"productQuantity":item.items[0].productQuantity,
						"productSkuId": item.items[0].productSkuId
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
	}
</script>

<style lang="scss" scoped>
	.title {
		width: 750rpx;
		height: 100rpx;
		background-color: #354E44;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.item {
			color: #fff;

		}

		.red {
			color: #f00;
		}
	}

	.content {
		width: 710rpx;
		margin: 30rpx auto;

		display: flex;
		justify-content: center;
		flex-wrap: wrap;

		.order {
			width: 710rpx;
			padding: 20rpx;
			background-color: #fff;
			box-sizing: border-box;
			border-radius: 20rpx;
			margin-bottom: 30rpx;

			.top {
				width: 670rpx;
				height: 80rpx;
				display: flex;
				justify-content: space-between;
			}

			.line {
				width: 670rpx;
				height: 2rpx;
				background-color: grey;
				margin: 10rpx auto;
			}

			.item {
				width: 670rpx;
				margin: 20rpx auto;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				position: relative;
               .btn{
				   width: 80rpx;
				   height: 30rpx;
				   border: 1px solid #333;
				   border-radius: 10rpx;
				   text-align: center;
				   font-size: 20rpx;
				   position: absolute;
				   right: 0rpx;
				   top: 100rpx;
			   }
			   
				.img {
					width: 200rpx;
					height: 200rpx;
				}

				.detail {
					margin-left: 30rpx;
					font-size: 28rpx;
					color: grey;
					width: 430rpx;
					height: 200rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-wrap: wrap;
					position: relative;

					.price {
						position: absolute;
						right: 0;
						top: 10rpx;
					}

					.num {
						position: absolute;
						right: 0rpx;
						bottom: 120rpx;
					}
				}


			}

			.bottom {
				width: 670rpx;
				height: 200rpx;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				align-items: center;

				.cancel,
				.pay {
					width: 180rpx;
					height: 50rpx;
					border-radius: 10rpx;
					border: 1px solid #333;
					margin-right: 30rpx;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.confirm,.del{
					width: 180rpx;
					height: 50rpx;
					border-radius: 10rpx;
					border: 1px solid #333;
					margin-right: 30rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					}
			}
		}
	}
</style>