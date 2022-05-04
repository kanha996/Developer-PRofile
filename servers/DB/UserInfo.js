const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: { type: String },
  userID: { type: String },
  avatar_url: { type: String },
  name: { type: String },
  company: { type: String },
  location: { type: String },
  blog: { type: String },
  bio: { type: String },
  email: { type: String },
  github_id: { type: String },
  linkedin_id: { type: String },
  codechef_id: { type: String },
  hackerrank_id: { type: String },
  medium_id: { type: String },
  twitter_id: { type: String },
  repos: [
    {
      _id: { type: String },
      name: { type: String },
      html_url: { type: String },
      description: { type: String },
      updated_at: { type: String },
    },
  ],
});

module.exports = mongoose.model("userInfo", userSchema);
