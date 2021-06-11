import axios from "axios";
// Currently set to our backend which lives on a different localhost instance. Change this for production build.
const baseURL = "http://localhost:3001/api/codesnippets/"

export const getCodeSnippets = async () => {
	try {
		const codeSnippets = await axios.get(baseURL);
		return codeSnippets;
	} catch (error) {
		console.log("Error in fetching API!");
		throw new Error(error);
	}
};

export const postCodeSnippet = async (snippetTitle, snippetContent) => {
	try {
		const postedCodeSnippet = await axios.post(baseURL, {
			snippetTitle: snippetTitle,
			snippetContent: snippetContent
		});
		console.log("Successfully POSTed:", postedCodeSnippet)
	} catch (error) {
		console.log("Error in POST request to API!");
	}
};

const API = {
	getCodeSnippets: getCodeSnippets,
	postCodeSnippet: postCodeSnippet
};

export default API;