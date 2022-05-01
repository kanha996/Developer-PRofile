const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: String,
  userID: { type: String, required: true },
  avatar_url: String,
  repo_url: String,
  name: String,
  company: String,
  location: String,
  blog: String,
  bio: String,
  email: String,
  github_id: String,
  linkedin_id: String,
  codechef_id: String,
  hackerrank_id: String,
  medium_id: String,
  twitter_id: String,
});

module.exports = mongoose.model("userInfo", userSchema);
