const router = require("express").Router();
const codeSnippetRoutes = require("./codeSnippetRoutes");

router.use("/codesnippets", codeSnippetRoutes);

module.exports = router;