	<template>
		<view>
			<view class="content">
				<view class="text">收件人
				</view>
				<input type="text" class="ipt name" placeholder="请输入收件人姓名" v-model="name">
				<view class="line"></view>
				<view class="text">电话号码
				</view>
				<input type="text" class="ipt phone" placeholder="请输入收件人电话号码" v-model="phone">
				<view class="line"></view>
				<view class="text">所在地区
				</view>
				<view class="region">
					<pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion">
						<!-- <view class="choose">请点击选择地址</view> -->
						<view>{{defaultRegion.join('-')}}</view>
					</pick-regions>
				</view>
				<view class="text">详细地址
				</view>
				<input type="text" class="ipt address-detail" placeholder="请输入详细地址" v-model="detailAddress">
				<view class="line"></view>
				<button class="btn" @tap="doSubmit">确定</button>
			</view>
		</view>
	</template>

	<script>
		import pickRegions from '@/components/pick-regions/pick-regions.vue'
		import {
			addAddress,
			updateAddress
		} from '../../../api/address/index.js'
		export default {
			components: {
				pickRegions
			},
			data() {
				return {
					region: [],
					defaultRegion: ['河南省', '郑州市', '中原区'],
					defaultRegionCode: '450007',
					addressId: '',
					name:'',
					phone:'',
					detailAddress:''
				}
			},
			onLoad(options) {
				this.addressId = options.id
			},
			computed: {
				regionName() {
					// 转为字符串
					return this.region.map(item => item.name).join(' ')
				}
			},
			methods: {
				// 获取选择的地区
				handleGetRegion(region) {
					this.region = region;
					this.defaultRegion = this.region.map(item => item.name)
					console.log('region',region);
				},
				async doSubmit() {
					if (this.addressId) {
						// 更新
						const res=await updateAddress(
						{
						  "city": this.region[1].name,
						  "cityCode": this.region[2].code,
						  "defaultStatus": 0,
						  "detailAddress": this.detailAddress,
						  "id": this.addressId,
						  "name": this.name,
						  "phoneNumber": this.phone,
						  "postCode": "470000",
						 "province": this.region[0].name,
						 "region": this.region[2].name,
						 "tag": "公司"
						}
						)
						console.log('updateAddress',res);
					} else {
						const res = await addAddress({
							"city": this.region[1].name,
							"cityCode": this.region[2].code,
							"defaultStatus": 0,
							"detailAddress": "罗庄小区",
							"name": "nancy",
							"phoneNumber": this.phone,
							"postCode": "470000",
							"province": this.region[0].name,
							"region": this.region[2].name,
							"tag": "公司"
						})
						console.log(22);
						console.log('addAddress', res);
						uni.navigateBack({
							delta: 1
						})
					}


				}
			}
		}
	</script>

	<style lang="scss" scoped>
		.content {
			width: 710rpx;
			margin: 30rpx auto;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;

			.text {
				width: 150rpx;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 36rpx;
			}

			.ipt {
				margin-left: 30rpx;
				width: 400rpx;
				height: 100rpx;
				color: grey;
			}

			.line {
				width: 670rpx;
				height: 2rpx;
				background-color: grey;
			}

			.choose {
				font-size: 40rpx;
				margin-bottom: 30rpx;
				margin-top: 30rpx;
			}
			.region{
				width: 400rpx;
				height: 100rpx;
				display: flex;
				align-items: center;
				margin-left: 30rpx;
			}

			.btn {
				width: 150rpx;
				height: 80rpx;
				margin: 50rpx auto;
			}
		}
	</style>