<template>
	<view>
		<view class="list" v-if="addressList.length">

			<view @tap="chooseAddress(item)" class="item" v-for="(item,index) in addressList" :key="item.id">
				<view class="name">{{item.name}}</view>
				<view class="phone">{{item.phoneNumber}}</view>
				<view class="address">{{item.province}}-{{item.city}}-{{item.region}}</view>
				<view class="line"></view>
				<uni-icons @tap="editAddress(item.id)" class="edit" type="compose" size="25"></uni-icons>
			</view>
			<view class="add" @tap="goAddress">继续添加地址</view>
		</view>
		<view @tap="goAddress" v-else class="tip">
			请去添加新地址
		</view>
	</view>
</template>

<script>
	import {
		findAllAddress
	} from '../../api/address/index.js'
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				addressList: []
			}
		},
		onLoad() {
			this.findAllAddressList()
		},
		methods: {
			...mapMutations(['updateAddress']),
			// 查找地址
			async findAllAddressList() {
				const res = await findAllAddress()
				console.log('findAllAddress', res);
				this.addressList = res.data.items
				console.log(this.addressList);
			},
			goAddress() {
				uni.navigateTo({
					url:'/pages/address/addressDetail/addressDetail'
				})
			},
			chooseAddress(address) {
            this.updateAddress(address)
			uni.navigateBack({
				delta:1
			})
			},
			// 跳转到地址编辑页面
			editAddress(id){
				uni.navigateTo({
					url:'/pages/address/addressDetail/addressDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		width: 670rpx;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
.add{
	font-size: 40rpx;
	margin-top: 20rpx;
	color: #354E44;
}
		.item {
			width: 670rpx;
			height: 180rpx;
			display: flex;
			// justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
position: relative;
			.name {
				width: 670rpx;
				height: 30rpx;
				font-size: 36rpx;
			}

			.phone {
				width: 670px;
				height: 30rpx;
				color: #9B958E;
			}

			.address {
				width: 670rpx;
				height: 30rpx;
			}

			.line {
				width: 670rpx;
				height: 2rpx;
				background-color: #9B958E;
			}
			.edit{
				position: absolute;
				right: 30rpx;
				top: 20rpx;
			}
		}
	}
</style>