

 function verifyToken(req,res,next)
 {
     const barearHeader = req.headers['authorization'];

     if(typeof barearHeader !== 'undefined')
     {
         const bearer = barearHeader.split(' ');
         const bearerToken = bearer[0];
         req.token = bearerToken;
         next();
     }
     else
     {
         res.sendStatus(403);
     }
 }

 module.exports = verifyToken;