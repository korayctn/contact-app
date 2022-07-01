const express = require('express');
const router = express.Router();
const path = require("path");
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, "../views/login.html"));
})
router.post('/auth',(req, res)=>{
    const {username,password} = req.body;
    User.findOne({username},(err,user)=>{
        if(err){
            throw err;
        }
        else if (!user){
            return res.send('user couldn\'t be found.');
        }
        else if(password != user.password){
            return res.send('password is not correct.')
        }
        else{
            const payload = {
                username
            }
            const token = jwt.sign(payload,req.app.get('api-key'),{
                expiresIn:720
            })
        }
    })
})
module.exports = router;