import request from '@/api/request.js'

// 获取商品分类
 function findCategory(id){
	return request({
		url:`/lejuClient/productCategory/findCategory/${id}`
	})
}
function findProduct(start,limit,data){
	return request({
		url:`/lejuClient/product/findProductList/${start}/${limit}`,
method:'post',
data
	})
}
export {findCategory,findProduct} 