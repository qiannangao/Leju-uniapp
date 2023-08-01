<template>
	<view>
		<view class="content">
			<view class="title">{{article.title}}</view>
			<view class="info">
				<view class="author">作者：{{article.author}}</view>
				<view class="time">时间：{{article.createTime}}</view>
			    <view class="summary">{{article.summary}}</view>
			    <view class="content" v-html="article.content1"></view>
			</view>
			<image class="img" :src="article.coverImg" mode=""></image>
		</view>
	</view>
</template>

<script>
	import {
		findArticle
	} from '../../../api/find/index.js'
	export default {
		data() {
			return {
				articleId: '',
				article: ''
			}
		},
		onLoad(options) {
			console.log(options);
			this.articleId = options.id;
			this.getfindArticle()
		},
		methods: {
			async getfindArticle() {
				const res = await findArticle(this.articleId)
				console.log('findArticle', res);
				this.article = res.data.productArticle;
				// 动态设置tabbar标题
				uni.setNavigationBarTitle({
					title:this.article.title
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 670rpx;
		height: 800rpx;
		margin: 30rpx auto;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.title {
			font-size: 40rpx;
			font-weight: 600;
			margin-top: 50rpx;
		}
		.info{
			width: 670rpx;
			height: 200rpx;
			text-align: left;
		}
		.img{
			width: 600rpx;
			height: 500rpx;
			margin: 30rpx auto;
		}
	}
	
</style>