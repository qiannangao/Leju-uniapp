import request from '@/api/request.js'
 function bannerAds(){
	return request({
		url:'/lejuClient/home/bannerAds',
		method:'get'
	})
}

// 获取商品分类
 function findCategory(id){
	return request({
		url:`/lejuClient/productCategory/findCategory/${id}`
	})
}
// 热门
function hotList(){
	return request({
		url:'/lejuClient/home/hotList'
	})
}
// 新品
function latestList(){
	return request({
		url:'/lejuClient/home/lejuLatestProducts'
	})
}
// 猜你喜欢
function likeList(){
	return request({
		url:'/lejuClient/home/saleMostProducts'
	})
}
// 限时活动
function limitActivity(){
	return request({
		url:'/lejuClient/home/recommendList'
	})
}
export {bannerAds,findCategory,hotList,latestList,likeList,limitActivity}
