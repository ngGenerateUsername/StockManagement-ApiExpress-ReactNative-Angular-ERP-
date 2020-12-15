var Odoo = require('Odoo');

var odoo=new Odoo({
    host:'localhost',
    port:8069,
    database:'cartel',
    username: 'mbenhamouda099@gmail.com',
    password: 'sispoof'
  });

  module.exports = odoo;