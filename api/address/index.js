import request from '@/api/request.js'

//查询地址
function findAllAddress() {
	return request({
		url: `/lejuClient/address/findAllAddress`
	})
}
// 添加地址
function addAddress(data) {
	return request({
		url: '/lejuClient/address/addAddressInfo',
		method: 'post',
		data
	})
}
// 更新地址、
function updateAddress(data){
	return request({
		url:'/lejuClient/address/updateAddressInfo',
		method:'post',
		data
	})
}
export {
	findAllAddress,
	addAddress,
	updateAddress
}