const mongoose = require("mongoose");

const repoSchema = new mongoose.Schema({
  _id: String,
  name: String,
  html_url: String,
  desc: String,
  updated: String,
});

module.exports = mongoose.model("githubRepo", repoSchema);
