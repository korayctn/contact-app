const express = require("express");
const router = express.Router();
const path = require("path");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"));
});

router.post("/submit", (req, res) => {
  const { username, password } = req.body;

  //password encryption and creating new user
  bcrypt.hash(password, 10, (err, hash) => {
    const user = new User({
      username: username,
      password: hash,
    });

    const promise = user.save();

    promise
      .then((user) => {
        res.json({ msg: "Success", user: user });
      })
      .catch((err) => {
        res.json({ msg: "User couldn't be saved", error: err });
      });
  });
});
module.exports = router;
