import axios from "redaxios";
const apiHeader = {
	headers: {
		Accept: "application/vnd.github.mercy-preview+json"
	}
};

const arrArtikel = [];
const arrRepos = [];
export default class {
	static async getRepos() {
		const dataRepos = await (
			await axios.get("https://api.github.com/users/dimasandhk/repos", apiHeader)
		).data;

		arrRepos.length = 0;
		dataRepos.forEach((el) => {
			if (!el.language) {
				arrRepos.push({
					name: el.name,
					desc: el.description,
					url: el.html_url,
					lang: "No Lang",
					crt: el.created_at,
					upt: el.updated_at,
					topics: el.topics
				});
			} else {
				arrRepos.push({
					name: el.name,
					desc: el.description,
					url: el.html_url,
					lang: el.language,
					crt: el.created_at,
					upt: el.updated_at,
					topics: el.topics
				});
			}
		});

		return arrRepos;
	}
	static async getArticle() {
		const dataArtikel = await (await axios.get("https://dev.to/api/articles?username=dimasngoding"))
			.data;

		arrArtikel.length = 0;
		dataArtikel.forEach((el) => {
			arrArtikel.push({
				title: el.title,
				img: el.social_image,
				date: el.readable_publish_date,
				user: el.user.name,
				tag: el.tags,
				url: el.url,
				rct: el.public_reactions_count
			});
		});

		return arrArtikel;
	}
}
