var express = require('express');
var authRouters = express.Router();
var  bcrypt = require('bcryptjs');
const admin = require('./../../models/admin');
require('dotenv/config');
const jwt = require('jsonwebtoken');



authRouters.post('/login',function(req,res){
    const {email,password} = req.body;
    data={id:Number,email:String,token:String};
    ad = admin.findOne({email:email},function (err,myUser){
     if(myUser && bcrypt.compareSync(req.body.password,myUser.password)){
       const jwtToken = jwt.sign({id:myUser._id,email:myUser.email,password:myUser.password}, process.env.SECRET_KEY_JWT);
       data = {
           id:myUser._id,
           email:myUser.email,
           token:jwtToken
       }
            res.json(data);
     }
     else res.status(406).json({error:'not authorized'});  //Not acceptable response
       
     

    });
 
  

  });



  module.exports = authRouters;
  