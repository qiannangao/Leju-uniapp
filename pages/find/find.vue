<template>
	<view>
		<view class="title">
			<view class="title1" :class="isShowArticle?'border':''" @tap="showArticle">精选文章</view>
			<view class="title2" :class="isShowBrand?'border':''" @tap="showBrand">品牌列表</view>
		</view>
		<view class="content" v-if="isShowArticle">

			<view class="item" v-for="item in articleList" :key="item.id">
				<navigator :url="'articleDetail/articleDetail?id='+item.id">
					<image class="img" :src="item.coverImg" mode=""></image>
				</navigator>
				<view class="item-title">{{item.title}}</view>
				<view class="author">{{item.author}}</view>
				<view class="bottom">
					<view class="view">
						<image class="view-img" src="../../static/icons/view.png" mode=""></image>
						<view class="view-count">{{item.viewCount}}</view>
					</view>
					<uni-icons @tap="doCollected(item)" type="star" size="20"
						:color="item.isCollect?'#f00':'#999'"></uni-icons>
				</view>
			</view>
		</view>
		<view class="content" v-if="isShowBrand">
			<view class="item" v-for="item in brandList" :key="item.id">
				<image class="img" :src="item.bigPic" mode=""></image>
				<view class="item-title">{{item.name}}</view>
				<view class="author">{{item.brandStory}}</view>
				<view class="bottom">
					<view class="view">
						<image class="view-img" src="../../static/icons/view.png" mode=""></image>
						<view class="view-count">{{item.showStatus}}</view>
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mixin from '../../mixins/index.js'
	import {
		findBrandList,
		findArticleList
	} from '../../api/find/index.js'
	export default {
		mixins: [mixin],
		data() {
			return {
				start: 1,
				limit: 6,
				articleList: [],
				brandList: [],
				isShowArticle: true,
				isShowBrand: false

			}
		},
		onLoad() {
			this.getfindArticleList()
			this.getfindBrandList();



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
				const articleCollectList = uni.getStorageSync('articleCollectList');
				if (articleCollectList) {
					console.log('存在');
					// 如果存在
					this.articleList.forEach(item => {
						articleCollectList.forEach(article => {
							if (item.id === article.id) {
								// 相等则代表该文章已收藏
								item.isCollect = true
							}
						})
					})
				}

			},
			async getfindBrandList() {
				console.log(111);
				const res = await findBrandList(this.start, this.limit)
				console.log('findBrandList', res);
				this.brandList = res.data.rows
			},
			doCollected(article) {
				// 未登录不能收藏
				if (!this.checkLogin()) {
					return
				}
				// 如果登陆了，先从本地获取收藏的文章
				const articleCollectList = uni.getStorageSync('articleCollectList')
				if (!articleCollectList) {
					// 如果没有收藏，直接存储
					uni.setStorageSync("articleCollectList", [article])
					article.isCollect = true;
					uni.showToast({
						title: '收藏成功'
					})
				} else {
					// 如果有收藏，则push进数组里
					// 同时要判断是否已有该id，已有则不重复push
					// find会返回数组中符合条件的第一个值，在数组中找到的话则不会往下执行。 如果数组中没有符合条件的值则返回undefined **
					let item = articleCollectList.find(item => item.id == article.id)
					if (item) {
						let index = articleCollectList.findIndex(item => item.id == article.id)
						articleCollectList.splice(index, 1)
						article.isCollect = false;
						uni.showToast({
							title: '已取消收藏'
						})
					} else {
						articleCollectList.push(article)
						article.isCollect = true;
						uni.showToast({
							title: '收藏成功'
						})
					}


					// 直接push时，本地存储内不显示,应把添加的新数组存储进去·
					uni.setStorageSync('articleCollectList', articleCollectList)
				}
				console.log(111);
				// uni.setStorageSync('token',this.productId)
			},
			showArticle() {
				this.isShowArticle = true;
				this.isShowBrand = false
			},
			showBrand() {
				this.isShowBrand = true;
				this.isShowArticle = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		width: 750rpx;
		height: 100rpx;
		background-color: #354E44;
		color: #fff;
		padding: 0 230rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;

		.border {
			border-bottom: 1px solid #fff;
		}

	}

	.content {
		width: 710rpx;
		height: 2000rpx;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;

		margin: 30rpx auto;
		// background-color: pink;

		.item {
			width: 710rpx;
			height: 500rpx;
			background-color: #fff;
			border-radius: 30rpx;
			margin-bottom: 30rpx;
			color: #fff;
			position: relative;

			.img {
				width: 710rpx;
				height: 400rpx;
			}

			.item-title {
				position: absolute;
				left: 20rpx;
				bottom: 180rpx;
				font-size: 40rpx;
			}

			.author {
				position: absolute;
				left: 20rpx;
				bottom: 120rpx;
			}

			.bottom {
				width: 710rpx;
				height: 100rpx;
				display: flex;
				justify-content: space-between;
				padding: 20rpx 40rpx;
				box-sizing: border-box;
				color: #333;

				.view {
					width: 100rpx;
					height: 40rpx;

					.view-img {
						width: 40rpx;
						height: 40rpx;
					}

					.view-count {
						float: right;
					}
				}

				.collect {
					width: 40rpx;
					height: 40rpx;
					color: #354E44;
				}

			}
		}

	}
</style>