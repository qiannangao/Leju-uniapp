<template>
	<view>
		<!-- 购物车 -->
		<view class="content" v-if="cartList">
			<view class="item" v-for="item in cartList" :key="item.id">
				 <evan-checkbox v-model="item.checked"></evan-checkbox>
				<image class="img" :src="item.productPic" mode=""></image>
				<view class="info">
				<view class="name">{{item.productName}}</view>
			    <view class="price">￥{{item.price}}元</view>
			     <view class="num">{{item.quantity}}</view>
						</view>
</view>
			<view class="bottom">
				 <evan-checkbox v-model="allSelected">全选</evan-checkbox>
			<view class="totalPrice">总价￥{{totalPrice}}元</view>
			<view @tap="doSubmit" class="buy">结算</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mixin from '../../../mixins/index.js'
	import {findCartItem,addPreorder} from '../../../api/product/index.js'
	export default {
		mixins:[mixin],
		data() {
			return {
				cartList:'',
				
			}
		},
		onLoad() {
			if(!this.checkLogin())return;
			this.findCartItemList()
		},
		computed:{
			allSelected:{
				get() {
					return this.cartList.every(item=>item.checked)
				},
				set(val) {
					this.cartList.forEach(item=>item.checked=val)
				}
				
			},
			totalPrice(){
				return this.cartList.reduce((total,item)=>{
					if(item.checked){
						return total+=item.price*item.quantity
					}else{
						return total
					}
				},0)
			}
		},
		methods: {
			async findCartItemList(){
				const res= await findCartItem()
				console.log('findCartItem',res);
				res.data.items.forEach(item=>{
					item.checked=false
				})
				this.cartList=res.data.items
			},
			async doSubmit(){
				const selectArr=this.cartList.filter(item=>item.checked)
				console.log(selectArr);
				if(!selectArr.length){
					uni.showToast({
						title:'至少选中一件商品',
						icon:'none'
					})
					return
				}else{
					let orderItemList=[];
					// 把选中的商品的部分参数放入数组
					selectArr.forEach(item=>{
						orderItemList.push({
							"cartId": item.id,
							"productId": item.productId,
							"productQuantity":item.quantity,
							"productSkuId": item.productSkuId
						})
					})
					const res=await	addPreorder({
						"orderItemList":orderItemList,
						}
						)
						console.log('cart-addOrder',res);
						if(res.success){
							uni.showToast({
								title: '1s后跳转至订单确认页'
							})
							setTimeout(() =>
								uni.navigateTo({
									url: `/pages/confirmOrder/confirmOrder?id=${res.data.orderId}`
								}), 1000)
							
						}
				}
			
			}
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
		width: 670rpx;
		height: 200rpx;
		margin-bottom: 30rpx;
		display: flex;
		justify-content: flex-start;
		background-color: #fff;
		border-radius: 20rpx;
		padding: 30rpx;
		.img{
			margin-left: 20rpx;
			width: 200rpx;
			height: 200rpx;
		}
		.info{
			width: 480rpx;
			height: 200rpx;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			margin-left: 30rpx;
			.name{
				width: 400rpx;
				height: 50rpx;
			}
			.price{
				width: 400rpx;
				height: 30rpx;
			}
		}
		
	}
	.bottom{
		position: fixed;
		right: 0;
		bottom: 0;
		width: 700rpx;
		height: 200rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx;
		box-sizing: border-box;
		margin-bottom: 30rpx;
		.buy{
			width: 130rpx;
			height: 90rpx;
			background-color: #354E44;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 20rpx;
		}
	}
}
</style>
