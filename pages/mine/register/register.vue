<template>
	<view>
		
		<view class="avatar">
			<!-- 修改图片路径 -->	
			<image class="avatar-img" :src="icon"></image>
			<view class="btn-img"  @tap="changeAvatar">更换头像</view>
		<!-- 手机号和密码验证 -->
	    <view class="form">
		<input type="text" placeholder="请输入手机号" v-model="tel">
	<input type="password" placeholder="请输入密码" v-model="pwd">
	<input type="text" placeholder="请输入用户名" v-model="username">
	<input type="text" placeholder="请输入昵称" v-model="nickname">
	<input type="text" placeholder="请输入验证码">
	<button class="btn" @tap="getregister">注册</button>
	
	</view>
		</view>
	</view>
</template>

<script>
import baseURL from '../../../api/baseURL';
import {register} from '../../../api/user/index.js'
	export default {
		data() {
			return {
				//绝对路径和相对路径都支持
				icon:'../../../static/icons/leju-logo.png',
				tel:'',
				pwd:'',
				username:'',
				nickname:''
			}
		},
		methods: {
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
			async getregister(){
				const res=await register(
				{
				 "icon": this.icon,
				 "nickname": this.nickname,
				"password": this.pwd,
				 "phone": this.tel,
				 "sex": 0,
				"status": 0,
				"username": this.username,
				}
				)
				console.log('register',res);
				// 手机号，密码，昵称，用户名
				if(res.success){
					uni.navigateTo({
						url:`/pages/mine/login/login?username=${this.username}&pwd=${this.pwd}`
					})
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
 .avatar{
	 width: 750rpx;
	 height: 200rpx;
	 display: flex;
	 justify-content: center;
	 flex-wrap: wrap;
	 .avatar-img{
		 width: 200rpx;
		 height: 200rpx;
		 border-radius: 200rpx;
		 
	 }
	 .btn-img{
		 width: 750rpx;
		 height: 30rpx;
		 color: #333;
		 text-align: center;
opacity: .7;
margin-top: 20rpx;
cursor: pointer;
	 }
 }
 .form{
	 margin-top: 40rpx;
	 display: flex;
	 justify-content: center;
	 flex-wrap: wrap;
	 input{
		 width: 600rpx;
		 height: 100rpx;
		 background: #E3DFDA;
		 border-radius: 50rpx;
		 padding-left: 30rpx;
		 box-sizing: border-box;
		 margin-bottom: 30rpx;
	 }
	 .btn{
	 	width: 600rpx;
	 	height: 100rpx;
	 	border-radius: 50rpx;
	 	background: #354E44;
	 	color: #fff;
	 	font-weight: 600;
	 	margin-top: 50rpx;
	 	margin-bottom: 50rpx;
	 }
 }
</style>
