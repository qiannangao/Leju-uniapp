<template>
	<view class="container">
		<view class="content">
			<view class="text">头像</view>
			<image @tap="changeAvatar" class="img" :src="icon" mode=""></image>
			
		</view>
		<view class="content">
			<view class="text">用户名</view>
			<view class="username">{{username}}
			
			</view>
		</view>
		
		<view class="content">
			<view class="text">昵称</view>
			<view class="nickname">
				<input class="ipt" type="text" v-model='nickname'>
			<image class="arrow" src="../../../static/icons/arr-r-1.png" mode=""></image></view>
		</view>
		<view class="content">
			<view class="text">手机号</view>
			<view class="tel">
				<input class="ipt" type="text" v-model="tel">
			<image class="arrow" src="../../../static/icons/arr-r-1.png" mode=""></image>
			</view>
		</view>
		<view class="content">
			<view @tap="signOut" class="text">退出登录</view>
				<image class="arrow" src="../../../static/icons/arr-r-1.png" mode=""></image>
		</view>
		
		<view @tap="updateInfoList" class="save">保存</view>
	</view>
</template>

<script>
	
	import baseURL from '../../../api/baseURL.js'
import {getUserInfo,login,updateInfo} from '../../../api/user/index.js'
	export default {
		data() {
			return {
			icon:'',
			username:'',
			nickname:'',
				tel:'',
				id:''
			}
		},
		onLoad(){
			this.getUserInfoList()
		},
		methods: {
			async getUserInfoList(){
					const res=await getUserInfo()
					console.log('getUserInfo',res);
			this.icon=res.data.userInfo.icon
			this.username=res.data.userInfo.username
			this.nickname=res.data.userInfo.nickname
			this.tel=res.data.userInfo.phone;
			this.id=res.data.userInfo.id;
			console.log(this.id);
				},
				changeAvatar(){
					const that=this;
					 // #ifdef H5	
				uni.chooseImage({
					count:1,
					sourceType:['album','camera'],
					sizeType:['original'],
					success(res){
						console.log('chooseImage',res);
					// 成功后将临时路径传到服务器
					uni.uploadFile({
						url:baseURL+'/lejuClient/login/uploadAvatar',
						filePath:res.tempFilePaths[0],
						name:'file',
						success(res) {
							console.log('uploadFile',res.data);
							try{
								that.icon=JSON.parse(res.data).data.fileUrl
								console.log('that.icon',that.icon);
							}catch(e){
								//TODO handle the exception
							}
							
						}
					})
					}
				})
				// #endif
				
				// #ifdef MP-WEIXIN
				uni.chooseMedia({
					count:1,
					mediaType:['image','video'],
					sourceType:['album','camera'],
					success(res){
						console.log('chooseMedia',res);
						uni.uploadFile({
							url:baseURL+'/lejuClient/login/uploadAvatar',
							filePath:res.tempFilePaths[0],
							name:'file',
							timeout:5000,
							success(res){
								try{
									this.icon=JSON.parse(res.data).data.fileUrl
								}catch(e){
									//TODO handle the exception
								}
							}
						})
					}
				})
				// #endif
				},
				async updateInfoList(){
					console.log(this.id,this.nickname,this.tel);
					const res=await updateInfo(
					{
					  "icon": this.icon,
					  "id": this.id,
					  "nickname": this.nickname,

					  "phone": this.tel,
			          "sex":1,
					}
					);
					console.log('updateInfo',res);
					if(res.success){
						uni.switchTab({
							url:'/pages/mine/mine'
						})
					}
					
				},
				signOut(){
					const token=uni.getStorageSync('token');
					uni.showModal({
						content:'确认要退出吗',
						success(res){
							if(res.confirm){
							if(token){
								// token存在进行清除
								uni.removeStorage({
									key:'token',
									success(res){
										console.log('removeStorage',res);
										uni.switchTab({
											url:'/pages/mine/mine'
										})
									}
								})
							}	
							}
						}
					})
					
				},
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 750rpx;
	height: 800rpx;
	
	padding: 40rpx;
	box-sizing: border-box;
	.signOut{
		 width: 200rpx;
		 height: 80rpx;
		 margin: 50px auto;
		 border: 1px solid #333;
		 border-radius: 80rpx;
		 cursor: pointer;
		 line-height: 80rpx;
		 text-align: center;
	}
	.save{
		width: 400rpx;
		height: 100rpx;
		background-color: #354E44;
		color: #fff;
		border-radius: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 36rpx;
		margin: 20rpx auto;
	}
	.content{
		weight: 670rpx;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #88847F;
		margin-bottom: 20rpx;
		.text{
			color: #645E58;
			font-size: 38rpx;
		}
		.img{
			width: 100rpx;
			height: 100rpx;
			border-radius: 80rpx;
		}
		.arrow{
			float: right;
		width: 30rpx;
			height: 30rpx;
			margin-left: 20rpx;
			margin-top: 35rpx;
			
		}
		.ipt{
			float: left;
			width: 200rpx;
			height: 100rpx;
		}
	}
}
</style>
