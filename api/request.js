import baseURL from '@/api/baseURL.js'

function request(config){
	return new Promise((resovle,reject)=>{
		uni.request({
			url:baseURL + config.url,
			method:config.method,
			data:config.data,
			timeout:5000,
			header:{
				token:uni.getStorageSync('token')?uni.getStorageSync('token'):''
			},
			success(res){
				if(res.data.success){
					resovle(res.data)
				}else if(res.data.code==20002){
					uni.showModal({
						title:'登录提示',
						content:'登录异常，是否重新登录',
						success(res){
							if(res.confirm){
								uni.navigateTo({
									url:'/pages/mine/login/login'
								})
							}else {
								uni.showToast({
									title:'您点击了取消',
									icon:'none'
								})
							}
						}
					})
				}
				
			},
			fail(err){
				reject(err)
			}
		})
	})
}

export default request 
