import request from '@/api/request.js'
 function getPreOrder(id){
	return request({
		url:`/lejuClient/order/getPreOrderById/${id}`,
		method:'get'
	})
}
// 生成确认单;形成订单并返回id
function addPreOrder(data){
	return request({
		url:'/lejuClient/order/addPreOrder',
		method:'post',
		data,
	})
}
// 支付
function getPay(data){
	return request({
		url:'/lejuClient/order/payConfirm',
		method:'post',
		data
	})
}
export {getPreOrder,addPreOrder,getPay}