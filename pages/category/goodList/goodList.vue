<template>
	<view>
		<view class="title">
			<view @tap="tabChange(index)" class="title-item" v-for="(item,index) in tabbarList" :key="item.id">
				<view class="title-name" :class="current==index?'active':''">{{item.name}}</view>
		        <view v-if="index==1||index==2" class="arrow">
		               	<uni-icons :color="current==index&&item.status==='up'?'#f00':'#fff'" type="arrowup" size="15"></uni-icons>
                        <uni-icons :color="current==index&&item.status==='bottom'?'#f00':'#fff'" type="arrowdown" size="15"></uni-icons>

		</view>
			</view>
		</view>
		<view class="content">
			<navigator :url="'../../productDetail/productDetail?id='+item.id" class="item" v-for="(item,index) in productList" :key="item.id">
				<image :src="item.pic" mode=""></image>
		<view class="item-name">{{item.name}}</view>
			<view class="item-info">
				<view class="price">￥{{item.price}}元</view>
			    <view class="more">不凡</view>
			</view>
			</navigator>
			<view class="tip" v-if="total==productList.length">
				已无更多数据
			</view>
		</view>
	</view>
</template>

<script>
	import {findProduct} from '../../../api/category/index.js'
	export default {
		data() {
			return {
				categoryId:'',
				productList:[],
				current:0,
				isDesc:0,
				sortBy:"",
				start:1,
				limit:6,
				total:0,
				tabbarList:[
					{
						id:1,
						name:'新品',
						status:'default'
					},
					{
						id:2,
						name:'销量',
						status:'default'
					},
					{
						id:3,
						name:'价格',
						status:'default'
					},
					{
						id:4,
						name:'筛选',
						status:'default'
					}
				]
			}
		},
		onLoad(options){
			console.log('options',options);
			this.categoryId=options.id;
			this.getfindProduct()
		},
		onPullDownRefresh(){
			console.log('下拉刷新');
			// 重置和重新获取数据
			this.resetParams()
			this.getfindProduct()
		},
		onReachBottom(){
			console.log('触底刷新');
			this.start++;
			if(this.total>this.tabbarList.length){
			this.getfindProduct()	
			}
			
		},
		methods: {
			async getfindProduct(){
				const res=await findProduct(this.start,this.limit,{
					"categoryId":this.categoryId,
					"isDesc":this.isDesc,
					"sortBy":this.sortBy
				})
				console.log('findProduct',res);
				this.total=res.data.total;
				this.productList.push(... res.data.rows);
				console.log('push后的productList',this.productList);
			// 获取数据后关闭进度条
			uni.stopPullDownRefresh()
			},
			tabChange(idx){
				this.current=idx;
				// 需要重置数据后再进行获取
				// 每次点击，将排序方式，是否降序，起始页，product列表都设置为初始值
				this.resetParams();
				let item=this.tabbarList[idx];
				// 点击后，如果原来状态是向下，则变回向上；反之相反
				// 同时要确保current==index
				if(item.status==="default"||item.status==="bottom"){
					item.status="up";
					this.isDesc=1
				}else if(item.status==="up"){
					item.status="bottom"
					this.isDesc=0
				}
				if(idx==1){
					this.sortBy="sale"
				}else if(idx==2){
					this.sortBy="price"
				}
				this.getfindProduct()
			},
			resetParams(){
				this.sortBy='';
				this.isDesc=0;
				this.start=1;
				this.productList=[]
			}
		}
	}
</script>

<style lang="scss" scoped>

.content{
	width: 750rpx;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 40rpx;
	box-sizing: border-box;
	text-align: center;
	.tip{
		width: 750rpx;
		height: 30rpx;
		text-align: center;
		color: #333;
	}
	.item{
		width: 47%;
		height: 400rpx;
		// background-color: pink;
		background-color: #fff;
		margin-bottom: 40rpx;
		image{
			width: 100%;
			height: 52%;
		}
		.item-name{
			width: 100%;
			height: 80rpx;
			padding: 20rpx;
			font-weight: 600;
			text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
box-sizing: border-box;
margin-top: 20rpx;

		}
		.item-info{
			width: 100%;
			height: 100rpx;
			display: flex;
            justify-content: space-between;
			padding: 20rpx;
			box-sizing: border-box;
		}
	}
}
.title{
	width: 750rpx;
	height: 60rpx;
	background-color: #354E44;
	display: flex;
justify-content: space-around;
line-height: 60rpx;
.title-item{
	
	color: #fff;
	// 让文字和箭头在一排展示
	display: flex;
	justify-content: center;
	.active{
		color: red;
	}
	.arrow{
		display: flex;
		flex-direction: column;
		justify-content: center;
		.uni-icons:nth-child(1){
			position: absolute;
			top: -6rpx;
		}
		.uni-icons:nth-child(2){
			position: absolute;
			top: 14rpx;
		}
	}
}
}
</style>
