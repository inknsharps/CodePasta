const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(require("./routes"));
app.use(cors());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/codepasta", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`Now listening on PORT ${PORT}!`);
});