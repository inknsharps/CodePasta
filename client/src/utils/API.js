import axios from "axios";
// Currently set to our backend which lives on a different localhost instance. Change this for production build.
const baseURL = "http://localhost:3001/api/codesnippets/"

const getCodeSnippets = async () => {
	try {
		const codeSnippets = await axios.get(baseURL);
		return codeSnippets;
	} catch (error) {
		console.log("Error in fetching API!");
		throw new Error(error);
	}
};

export default getCodeSnippets;