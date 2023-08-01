<template>
	<view>
		<view class="title">请选择支付方式</view>
		<button @tap="getPayList(1)">支付宝支付</button>
	<button @tap="getPayList(2)">微信支付</button>
	</view>
</template>

<script>
	import {getPay} from '../../../api/confirmOrder/index.js'
	export default {
		data() {
			return {
				orderId:'',
				payType:1
			}
		},
		onLoad(options) {
			console.log(options);
			this.orderId=options.id
		},
		methods: {
			async getPayList(type){
				this.payType=type;
				const res=await getPay(
				{
					"map":'1',
					"orderId":this.orderId,
					"payType":this.payType
				})
				console.log('getPay',res);
				if(res.success){
					uni.showToast({
						title:'支付成功，1s后跳转至订单页'
					})
					setTimeout(()=>
					uni.switchTab({
						url:'/pages/mine/mine'
					}),1000)
				}
			}
		}
	}
</script>

<style>

</style>
