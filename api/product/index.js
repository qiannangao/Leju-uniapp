import request from '@/api/request.js'
 function productDetail(id){
	return request({
		url:`/lejuClient/product/productDetail/${id}`,
		method:'get'
	})
}
export {productDetail}