
var Odoo = require('node-odoo');
const username = 'mbenhamouda099@gmail.com';
const password = 'sispoof';
var odoo=new Odoo({
  host:'localhost',
  port:'8069',
  database:'entreprise',
  username: 'mbenhamouda099@gmail.com',
  password: 'sispoof'
});


module.exports = odoo ;