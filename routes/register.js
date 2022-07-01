const express = require("express");
const router = express.Router();
const path = require("path");

const User = require('../models/User');

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"));
});

router.post('/submit',(req, res)=>{
  const username = req.body.username;
  const password = req.body.password;
  const user = new User({
    username : username,
    password : password,
  })
  const promise = user.save();
  promise.then((user)=>{
    res.json({msg: 'Success',user: user})
  }).catch((err)=>{
    res.json({msg: 'User couldn\'t be saved',err:err});
  })
})
module.exports = router;
