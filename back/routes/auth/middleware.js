
const jwt = require('jsonwebtoken');
require('dotenv').config();
 function verifyToken(req,res,next)
 {
   
     const barearHeader = req.headers['authorization'];
    if(barearHeader)
    {
        token = barearHeader.split(' ');
        
        jwt.verify(token[1],process.env.SECRET_KEY_JWT,(err,user)=>{
            if(err)
            return res.status(403).json({error:403,message:'Forbidden access'});

           //hné ken ne5dmou eb double user(multi user auth) yelzem n7ottou fel req ta3 el route user (req.user) bech nverfiw 3Lih el sala7iyeet li 3andou (admin/user)
           //hia useless fel projet btw XD 
           req.user = user;
            next();
        });
        
    }
    else{
       return res.status(401).json({error:401,message:'unauthorized'});
    }
   
 }

 module.exports = verifyToken;