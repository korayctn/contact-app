const express = require('express');
const router = express.Router();
const path = require("path");
const User = require('../models/User');

router.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, "../views/login.html"));
})
router.post('/auth',(req, res)=>{
    const {username,password} = req.body;
    res.json({username,password})
})
module.exports = router;