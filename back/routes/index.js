var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/home', function(req, res, next) {
 return 'hello world!';
});



module.exports = router;
