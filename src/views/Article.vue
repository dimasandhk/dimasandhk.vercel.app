<template>
	<div class="article mt-5">
		<div class="container mb-5">
			<div class="article-content">
				<h1 class="judul text-center" data-aos="fade-down" data-aos-duration="700">
					Dev.to Post
				</h1>
				<Loading v-show="showLoading == true" />
				<div class="row justify-content-center">
					<div
						class="col-12 col-md-12 col-lg-6"
						v-for="({ title, img, date, user, tag, url, rct }, i) of arrArtikel"
						:key="i"
						:data-aos="i % 2 == 0 ? 'fade-up-right' : 'fade-up-left'"
						data-aos-duration="1000"
					>
						<div class="article-box mt-3">
							<img :src="img" class="w-100 mb-3 rounded" />
							<h4>
								{{ title }}
							</h4>
							<h6 class="text-muted">{{ user }} ({{ date }})</h6>
							<h6 class="text-muted">
								<span class="badge badge-dark">Tags: ({{ tag }})</span>
							</h6>
							<h6 class="text-muted">
								<span class="badge badge-dark">Reactions: {{ rct }} <Star /></span>
							</h6>
							<a
								class="btn btn-visit mt-3 btn-block btn-sm shadow-none"
								:href="url"
								target="_blank"
							>
								Visit
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Star from "../components/Svg/Star.vue";
import NProgress from "nprogress";
import ApiService from "../utils/ApiService";

export default {
	data: () => ({
		arrArtikel: [],
		showLoading: true
	}),
	beforeCreate() {
		document.title = "Post | @dimasandhk";
	},
	created: async function() {
		NProgress.start();

		const dataArtikel = await ApiService.getArticle();
		dataArtikel.forEach((el) => {
			this.arrArtikel.push({
				title: el.title,
				img: el.social_image,
				date: el.readable_publish_date,
				user: el.user.name,
				tag: el.tags,
				url: el.url,
				rct: el.public_reactions_count
			});
		});
		this.showLoading = false;

		NProgress.done();
	},
	components: {
		Star
	}
};
</script>

<style lang="scss">
.article {
	.badge-dark {
		background-color: #1affd6 !important;
		color: #27272e;
	}
	.article-box {
		.btn-visit {
			&:hover {
				border: 1px solid #393940;
			}
			&:active {
				background-color: #393940;
			}
			color: #fff;
			border: 1px solid #393940;
			background-color: #393940;
			font-weight: 700;
		}
		box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 8px 0px;
		background-color: #27272e;
		padding: 10px 15px;
		border: 1px solid #27272e;
		border-radius: 7px;
	}
	.judul {
		font-weight: 600;
		color: #1affd6;
	}
}
</style>
