<template>
	<view class="content">
		<view class="catelist">
		<navigator :url="'goodList/goodList?id='+item.id" class="item" v-for="item in categoryList" :key="item.id">
		<view class="text">{{item.name}}</view>
		<image class="img" :src="item.icon" mode=""></image>
		
		</navigator>
		</view>
	</view>
</template>

<script>
	import {findCategory} from '../../api/category/index.js'
	export default {
		data() {
			return {
				categoryList:''
			}
		},
		onLoad(options){
			this.getfindCategory()
		},
		methods:{
			async getfindCategory(){
				const res=await findCategory("1308336521604599809")
				console.log('category',res);
						this.categoryList=res.data.category.children
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../css/common.scss");
	
  .catelist{
	  width: 750rpx;
	  height: 1400rpx;
	  display: flex;
	  justify-content: space-between;
	  flex-wrap: wrap;
	  padding: 40rpx;
	  box-sizing: border-box;
	  .item{
		  position: relative;
		  width: 710rpx;
		  height: 300rpx;
		  background-color: #D5D5D5;
		  border-radius: 25rpx;
		  margin-bottom: 40rpx;
		  .text{
			  float: left;
			  font-size: 56rpx;
			  position: absolute;
			  left: 50rpx;
			  top: 140rpx;
		  }
		  .img{
			  float: right;
		  		  width: 50%;
				  height: 100%;
		  }
	  }
	  .item:nth-child(2),.item:nth-child(1){
		  background-color: #fff;
	  }
	  .item:nth-child(3),.item:nth-child(4){
		  position: relative;
		  width: 300rpx;
		  height: 600rpx;
		  border-radius: 20rpx;
		
		  .img{
			  width: 100%;
			  height: 100%;
		  }
		  .text{
			  position: absolute;
			 left: 50rpx;
			 top: 140rpx;
			  z-index: 10;
		  }
		  
	  }
	
	  
  }
</style>
