const { response } = require("express");
const express = require("express");
const router = express.Router();
const axios = require("axios");

const UserDB = require("../DB/UserInfo");

// post social
router.post("/postInfo", (req, res) => {
  github = req.body.githubID;
  (linkedin = req.body.linkedinID),
    (codechef = req.body.codechefID),
    (hackerrank = req.body.hackerrankID),
    (medium = req.body.mediumID),
    (twitter = req.body.twitterID);

  function idApi() {
    return axios
      .get(`http://api.github.com/users/${github}`, github)
      .then((response) => {
        return response.data;
      });
  }

  function repoAPi() {
    return axios
      .get(`http://api.github.com/users/${github}/repos`, github)
      .then((response) => {
        return response.data;
      });
  }

  Promise.all([idApi(), repoAPi()]).then(function (response) {
    let user = new UserDB({
      _id: response[0].login,
      avatar_url: response[0].avatar_url,
      name: response[0].name,
      company: response[0].company,
      location: response[0].location,
      blog: response[0].blog,
      bio: response[0].bio,
      email: response[0].email,
      linkedin_id: linkedin,
      codechef_id: codechef,
      hackerrank_id: hackerrank,
      medium_id: medium,
      twitter_id: twitter,
      repos: response[1],
    });

    try {
      user.save();
      const rs = { id: user._id, url: user.avatar_url };

      res.status(200).json(rs);
    } catch (err) {
      res.status(400).json("Invalid Github");
    }
  });
});

//

//get user info
router.get("/:id", async (req, res) => {
  try {
    const response = await UserDB.findById(req.params.id);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  try {
    const u = await UserDB.findById(req.params.id);
    u.delete();
    res.status(200).json("deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//all developers
router.get("/", async (req, res) => {
  const allDev = [];

  try {
    let all = await UserDB.find();

    for (let i = 0; i < all.length; i++) {
      const { id, avatar_url } = all[i];
      allDev.push({ id: id, avatar_url: avatar_url });
    }
    res.status(200).json(allDev);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
