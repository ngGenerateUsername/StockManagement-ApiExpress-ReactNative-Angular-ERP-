var Odoo = require('Odoo');
require('dotenv/config');

var odoo=new Odoo({
    host:'localhost',
    port:8069,
    database:'cartel',
    username: process.env.EMAIL,
    password: process.env.PASSWORD
  });

  module.exports = odoo;