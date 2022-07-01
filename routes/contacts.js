const express = require('express');
const router = express.Router();
const path = require('path');
const Contact = require('../models/Contact');

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/contacts.html"));
})

module.exports = router;