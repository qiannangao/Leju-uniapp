<template>
	<view class="content">
		<view class="avatar">
			<image class="avatar-img" src="../../../static/icons/leju-logo.png" mode=""></image>
		</view>
		<view class="form">
			<input v-model="username" class="text" type="text" placeholder="请输入用户名" >
			<input v-model="pwd" class="pwd" type="password" placeholder="请输入密码" >
			<button @tap="dologin" class="btn">登录</button>
			<view class="more">
			<view class="findpwd">找回密码</view> |
			<navigator  class="register" url="../register/register">注册</navigator>
		</view>
		</view>
	</view>
</template>

<script>
	import {login} from '../../../api/user/index.js'
	export default {
		data() {
			return {
				username:'',
				pwd:'',
			}
		},
		onLoad(options) {
			console.log('options',options);
			this.username=options.username;
			this.pwd=options.pwd
		},
		methods: {
			async dologin(){
				const res=await login(
				{
				  "password": this.pwd,
				  "username": this.username
				}
				);
				console.log('login',res);
				if(res.success){
					uni.setStorageSync('token',res.data.token)
					uni.showToast({
						title:'您已登陆成功，1s后跳转至个人信息页'
					})
					setTimeout(()=>{
						uni.switchTab({
							url:'/pages/mine/mine'
						})
					},1000)
				}
			}
		}
	}
</script>

<style>
	.content{
		width: 750rpx;
		height: 1500rpx;
		.avatar{
			width: 200rpx;
			height: 200rpx;
			margin: 100rpx auto;
			.avatar-img{
				width: 200rpx;
				height: 200rpx;
				border-radius: 200rpx;
			    
			}
		}
		
		.form{
			width: 750rpx;
			height: 400rpx;
			display: flex;
            justify-content: center;
			flex-wrap: wrap;
			.text{
				width: 600rpx;
				height: 100rpx;
				margin-bottom: 30rpx;
				
				background: #E3DFDA;
				border-radius: 50rpx;
				padding-left: 30rpx;
				box-sizing: border-box;
			}
			.pwd{
				width: 600rpx;
				height: 100rpx;
				background: #E3DFDA;
				border-radius: 50rpx;
				padding-left: 30rpx;
				box-sizing: border-box;
				
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
			.more{
				width: 750rpx;
				height: 30rpx;
				display: flex;
                  justify-content: center;
				  color: #333;
				  font-size: 28rpx;
			}
			.findpwd{
				margin-right: 10rpx;
			}
			.register{
				margin-left: 10rpx;
			}
			}
			
	}

</style>
