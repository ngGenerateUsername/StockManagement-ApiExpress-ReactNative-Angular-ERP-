var express = require('express');
var authRouters = express.Router();
var  bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const admin = require('./../../models/admin');
require('dotenv/config');
const jwt = require('jsonwebtoken');
var Odoo = require('Odoo');






const connection = mongoose.connect(process.env.DB_CONNECTION ,{ useNewUrlParser: true,useUnifiedTopology: true });

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
     else res.status(401).json({error:'not authorized'});
       
     

    });
 
  

  });

    
 authRouters.get('/partners', function(req,res){
  var odoo=new Odoo({
    host:'localhost',
    port:8069,
    database:'cartel',
    username: 'mbenhamouda099@gmail.com',
    password: 'sispoof'
  });

  odoo.connect(function(err){
      if(err) {return console.log(err);}
       console.log('connected ! ');

      var params = {
        ids:[29,30],
      }
      odoo.get('product.template',params,function(err,values){
        if(err){ return console.log(err); }
        return res.json({result:values});
      });
    
    
  });


 });


  module.exports = authRouters;
  