const express = require("express");
const router = express.Router();

const UserDB = require("../DB/UserInfo");
const RepoDB = require("../DB/githubRepo");

// post social
router.post("/", (res, req) => {
  // github = req.body.githubID,
  // linkedin = req.body.linkedinID,
  // codechef = req.body.codechefID,
  // hackerrank = req.body.hackerrankID,
  // medium = req.body.mediumID,
  // twitter = req.body.twitterID;

  let repo = new RepoDB({
    _id: String,
    name: String,
    html_url: String,
    desc: String,
    updated: String,
  });
  try {
    repo.save();
    const response = { id: repo._id };
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user info
router.get("/:userId", (res, req) => {});

//delete user
router.delete("/:userId", (res, req) => {});
