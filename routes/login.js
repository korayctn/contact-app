const express = require("express");
const router = express.Router();
const path = require("path");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const cookieParser = require("cookie-parser");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});
router.post("/auth", (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    if (!user) {
      return res.send("user couldn't be found.");
    }
    // if user exists compare encrypted password
    else {
      bcrypt.compare(password, user.password).then((result) => {
        if (!result) {
          return res.send("password is not correct.");
        } else {
          const payload = {
            username,
          };
          const token = jwt.sign(payload, req.app.get("api-key"), {
            expiresIn: "1h",
          });
          res.cookie("token", token, {
            maxAge: 1000 * 60 * 15, // would expire after 15 minutes
            httpOnly: true, // The cookie only accessible by the web server
          });
          console.log(token);
          res.redirect("/contacts");
        }
      });
    }
  });
});
module.exports = router;
