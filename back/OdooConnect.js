var Odoo = require('Odoo');

var odoo=new Odoo({
    host:'localhost',
    port:8069,
    database:'test',
    username: 'bol3om80@gmail.com',
    password: '123456789'
  });

  module.exports = odoo;