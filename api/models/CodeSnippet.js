const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CodeSnippetSchema = new Schema({
	snippetTitle: {
		type: String,
		default: "New Code Snippet!"
	},
	snippetContent: {
		type: String,
		default: "console.log('Hello World!')"
	}
});

const CodeSnippet = mongoose.model("CodeSnippet", CodeSnippetSchema);

module.exports = CodeSnippet;