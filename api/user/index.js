import request from '@/api/request.js'

// 注册
 function register(data){
	return request({
		url:`/lejuClient/member/register`,
		method:'post',
		data
	})
}
// 登录
function login(data){
	return request({
		url:'/lejuClient/login/doLogin',
		method:'post',
		data
	})
}
// 获取用户信息
function getUserInfo(){
	return request({
		url:'/lejuClient/login/getMemberInfo'
	})
}
// 更新用户信息
function updateInfo(data){
	return request({
		url:'/lejuClient/member/updateMemberInfo',
		method:'post',
		data
	})
}
// 获取全部订单
function findAllOrders(){
	return request({
		url:'/lejuClient/order/findAllOrders',
		
	})
}
// 退单
function orderReturnApplys(){
	return request({
		url:'/lejuClient/orderReturn/orderReturnApplys',
		
	})
}
// 取消订单
function cancelOrder(orderId){
	return request({
		url:`/lejuClient/order/cancelOrder/${orderId}`,
		method:'post'
	})
}
export {register,login,getUserInfo,updateInfo,findAllOrders,orderReturnApplys,cancelOrder}