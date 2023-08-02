import request from '@/api/request.js'
// 查询文章
function findArticleList(start,limit){
	return request({
		url:`/lejuClient/productArticle/findArticleByPage/${start}/${limit}`,
		method:'get',
	    
	})
}
// 查询品牌
 function findBrandList(start,limit){
	return request({
		url:`/lejuClient/brand/findBrandsByPage/${start}/${limit}`,
		
		method:'get'
	})
}
//根据文章id查询信息
function findArticle(id){
	return request({
		url:`/lejuClient/productArticle/productArticle/${id}`,
		
	})
}
export {findBrandList,findArticleList,findArticle}