<template>
	<view>
		<view class="content" v-if="isShow">
			<navigator :url="'../../find/articleDetail/articleDetail?id='+item.id"  class="item" v-for="item in articleList" :key="item.id">
				<image class="img" :src="item.coverImg" mode=""></image>
				<view class="title">{{item.title}}</view>
			</navigator>
		</view>
		<view class="content" v-if="isShowTip">
			暂无收藏，快去添加吧!
		</view>
	</view>
</template>

<script>
	import {findArticleList} from '../../../api/find/index.js'
	import mixin from '../../../mixins/index.js'

	export default {
		mixins:[mixin],
		data() {
			return {
				start: 1,
				limit: 6,
				articleList:[],
		       collectList:[],
			  isShow:false,
			  isShowTip:false
			}
		},
		onLoad() {
			this.getfindArticleList()
		},
		methods: {
			async getfindArticleList() {
				console.log(111);
				const res = await findArticleList(this.start, this.limit)
				console.log('findArticleList', res);
				// 动态添加属性，先循环遍历，再赋值
				res.data.rows.forEach(item => {
					item.isCollect = false
				})
				this.articleList = res.data.rows;
				// 刚进页面渲染文章收藏
				if (!this.checkLogin()) return;
				// 从本地取出已收藏的文章渲染
				const articleCollectList=uni.getStorageSync('articleCollectList');
				console.log(articleCollectList.length);
				// 不为空时赋值
				if(!articleCollectList.length){
					this.isShow=false;
					this.isShowTip=true;
					console.log('不存在');
				}else{
					this.articleList=articleCollectList;
					this.isShow=true;
					console.log('存在');
				}
				
				console.log(this.articleList);
			
			},
		}
	}
</script>

<style lang="scss" scoped>
.content{
	width: 710rpx;
	// height: 2000rpx;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 30rpx auto;
	.item{
		width: 340rpx;
		height: 280rpx;
		background-color: #fff;
		border-radius: 20rpx;
		text-align: center;
		margin-bottom: 30rpx;
		.img{
			width: 100%;
			height: 180rpx;
			border-radius: 20rpx 20rpx 0 0;
			
		}
	}
}
</style>
