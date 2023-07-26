<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			const token=uni.getStorageSync('token')
			if(!token){
				// 如果token不存在，显示模态框
				uni.showModal({
					title:'提示',
					content:'您尚未登陆,是否立即登陆',
					success(res) {
						if (res.confirm) {
									uni.navigateTo({
										url:'/pages/mine/login/login'
									})
								} else{
									console.log('用户点击取消');
								}	
					}
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
