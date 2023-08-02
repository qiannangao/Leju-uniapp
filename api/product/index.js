import request from '@/api/request.js'
 function productDetail(id){
	return request({
		url:`/lejuClient/product/productDetail/${id}`,
		method:'get'
	})
}
// 加入购物车
function addCart(data){
	return request({
		url:'/lejuClient/cart/addCart',
		method:'post',
		data
	})
}
// 购买,生成预订单
function addPreorder(data){
	return request({
		url:'/lejuClient/order/addPreOrder',
		method:'post',
		data
	})
}
// 获取购物车列表
function findCartItem(data){
	return request({
		url:'/lejuClient/cart/findAllCartItem',
	})
}
export {productDetail,addCart,addPreorder,findCartItem}