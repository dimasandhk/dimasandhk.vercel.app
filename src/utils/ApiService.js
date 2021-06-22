import axios from "redaxios";
const apiHeader = {
	headers: {
		Accept: "application/vnd.github.mercy-preview+json"
	}
};

export default class {
	static async getRepos() {
		return await (await axios.get("https://api.github.com/users/dimasandhk/repos", apiHeader)).data;
	}
	static async getArticle() {
		return await (await axios.get("https://dev.to/api/articles?username=dimasngoding")).data;
	}
}
