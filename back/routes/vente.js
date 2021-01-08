var express = require('express');
var venteRoute = express.Router();
var odoo = require('./../OdooConnect');
var middleware = require('./auth/middleware');   


venteRoute.get('/all',middleware, function(req,res){
    odoo.connect(function(err){
        if(err) {return console.log(err);}
         console.log('connected ! ');
         //this instraction pour afficher le nombre de vente 
         //params
         var params = {domain: [ ],}; 
             odoo.search('sale.order', params,  function (err, products) {
                    if (err) { return res.status(500).json(err); } 
                    //el count chne7seb biha 9ddé famma men ventes fel liste bech mba3d nda5louha fel pramétre w n3awdou recherche jdid w fel les param ta3 recherche el limit ye5edh 9addé 3anna men vente bech to5rjelna 5edma ziw ziw 
                      var count  = products.length;

                      if(count == 0 )
                      {
                        return res.status(201).json({message:'Pas de vente pour le moment'});
                      }
                        var paramsGet = {
                                domain:[],
                                fields:['name','date_order','partner_id','amount_total','state'],
                                order: 'name',
                                limit:count,
                                offset: 0,  
                              }; 
                              console.log(count);
                  odoo.search_read('sale.order',paramsGet,function(err,vents){
                    if(err)
                      return res.status(500).json(err);
                      return res.status(200).json(vents);
                  }); 
        }); 
      
    });
  
  
   });
//// delete
   venteRoute.delete('/delete/:id', function(req,res){
    odoo.connect(function (err) {
      if (err) { return console.log(err); }
      console.log('connected ! ');
    });
   var id = parseInt(req.params.id);
    odoo.delete('sale.order', id, function (err, products) {
      if (err) { return console.log(err); }
      res.json(products);
    });
   });
  

   module.exports = venteRoute;