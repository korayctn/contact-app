const jwt = require('jsonwebtoken');

module.exports = (req,res,next) =>{
    const token = req.params.token;
    if(token){
        jwt.verify(token,req.app.get('api-key'),(err,decoded)=>{
            if(err){
                res.json({status:'404',msg:'failed to authenticate'});
            }
            else{
                req.decode = decoded;
                next();
            }
        })
    }   
    else{
        res.json({status:'404',msg:'token wasn\'t provided'});
    }
}