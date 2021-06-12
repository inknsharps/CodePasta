import axios from "axios";

const baseURL = "http://localhost:3001/api/codesnippets";

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

export const updateCodeSnippet = async (snippetID, snippetTitle, snippetContent) => {
	try {
		const updatedCodeSnippet = await axios.put(baseURL + snippetID, {
			snippetTitle: snippetTitle,
			snippetContent: snippetContent
		});
		console.log("Successfully PUTed:", updatedCodeSnippet);
	} catch (error) {
		console.log("Error in PUT request to API!");
	}
};

export const deleteCodeSnippet = async snippetID => {
	try {
		const deletedCodeSnippet = await axios.delete(baseURL + snippetID);
		console.log("Successfully DELETed:", deletedCodeSnippet);
	} catch (error) {
		console.log("Error in DELETE request to API!");
	}
};

const API = {
	getCodeSnippets,
	postCodeSnippet,
	updateCodeSnippet,
	deleteCodeSnippet
};

export default API;