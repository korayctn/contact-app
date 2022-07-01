const express = require("express");
const router = express.Router();
const path = require("path");
const bcrypt = require('bcryptjs');
const User = require('../models/User');

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"));
});

router.post('/submit',(req, res)=>{
  const {username , password } = req.body;
  const user = new User({
    username : username,
    password : password,
  })
  const promise = user.save();
  promise.then((user)=>{
    res.json({msg: 'Success',user: user})
  }).catch((err)=>{
    res.json({msg: 'User couldn\'t be saved',error:err});
  })
})
module.exports = router;
