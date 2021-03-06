const router = require("express").Router();
const CodeSnippet = require("../../models/CodeSnippet");
const cors = require("cors");

router.get("/", cors(), async (req, res) => {
	try {
		const codeSnippets = await CodeSnippet.find({});
		res.send(codeSnippets);
	} catch (error) {
		res.json(error);
	}
});

router.post("/", cors(), async (req, res) => {
	try {
		const newCodeSnippet = await CodeSnippet.create(req.body);
		res.json(newCodeSnippet);
	} catch (error) {
		res.json(error);
	}
});

router.put("/:id", cors(), async (req, res) => {
	try {
		const updatedCodeSnippet = await CodeSnippet.updateOne(
			{ _id: req.params.id },
			{ $set: { snippetTitle: req.body.snippetTitle, snippetContent: req.body.snippetContent } }
		);
		res.json(updatedCodeSnippet);
	} catch (error) {
		res.json(err);
	}
});

router.delete("/:id", cors(), async (req, res) => {
	try {
		const deletedCodeSnippet = await CodeSnippet.deleteOne(
			{ _id: req.params.id }
		);
		res.json(deletedCodeSnippet);
	} catch (error) {
		res.json(err);
	}
});

module.exports = router;