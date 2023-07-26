import baseURL from '@/api/baseURL.js'

function request(config){
	return new Promise((resovle,reject)=>{
		uni.request({
			url:baseURL + config.url,
			method:config.method,
			data:config.data,
			timeout:5000,
			success(res){
				resovle(res.data)
			},
			fail(err){
				reject(err)
			}
		})
	})
}

export default request 
