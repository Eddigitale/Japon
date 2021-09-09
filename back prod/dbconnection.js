var mysql = require('mysql');
var connection = mysql.createPool({
  port: 3300,
  host: 'bariserv.net',
  user: 'Cindy',
  password: 'JongHyun_13',
  database: 'japon'
});
module.exports = connection;