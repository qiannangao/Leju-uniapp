export default{
	data(){
		return {
			
		}
	},
	computed:{
		
	},
	methods:{
		checkLogin(){
			const token=uni.getStorageSync('token');
			if(!token){
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
				return false
			}else {
				return true
			}
		}
	}
}