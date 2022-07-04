const express = require('express');
const router = express.Router();
const path = require('path');
const Contacts = require('../models/Contact');

/**
 * 
 *     ****************** GET METHODS ******************
 * 
 */

router.get('/',(err,res)=>{
    res.sendFile(path.join(__dirname, "../views/contacts.html"));
})
// GET all contacts
router.get('/getAll',(req,res)=>{
    Contacts.find({ },(err,contact)=>{
        res.json(contact);
    })
})
// GET by userId
router.get('/getByUserId/:userID',(req,res)=>{

    const {userID} = req.params;

    Contacts.find({userID},(err,contacts)=>{
        if(err){
            throw new err
        }
        else{
            res.json(contacts)
        }
    })
})
// GET by ObjectID
router.get('/getById/:_id',(req,res)=>{

    const {_id} = req.params;

    Contacts.findById(_id,(err,contact)=>{
        if(err){
            throw new err
        }
        else{
            res.json(contact)
        }
    })
})


/**
 * 
 *      ****************** POST METHODS ******************
 * 
 */

// POST new contact 
router.post('/new',(req,res)=>{

    const{userID,name,surname,email,phoneNum} = req.body;
    
    const contact = new Contacts({
        userID,
        name,
        surname,
        email,
        phoneNum
    })
    const promise = contact.save();

    promise.then((contact)=>{
        res.json(contact);
    }).catch((err)=>{
        res.json(err);
    })
})
/**
 * 
 *      ****************** DELETE METHODS ******************
 * 
 */

router.delete('/delById/:_id',(req,res)=>{

    const {_id} = req.params;

    Contacts.findByIdAndDelete(_id,(err,contact)=>{
        if(err){
            throw new err
        }
        else{
            res.json({msg:'success',action:'deleted.'})
        }
    })
})

/**
 * 
 *      ****************** DELETE METHODS ******************
 * 
 */

router.put('/updateById/:_id',(req,res)=>{ 

    const {_id} = req.params;

    const {userID,name,surname,email,phoneNum} = req.body;

    Contacts.findByIdAndUpdate(_id,{
        userID : userID,
        name : name,
        surname : surname,
        email : email,
        phoneNum : phoneNum

    },{new:true},(err,contact)=>{
        if(err){
            throw new err
        }
        else{
            res.json(contact);
        }
    })
})

module.exports = router;