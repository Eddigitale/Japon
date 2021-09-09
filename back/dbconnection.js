var mysql = require('mysql');
var connection = mysql.createPool({
  port: 3308,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'japon'
});
module.exports = connection;
