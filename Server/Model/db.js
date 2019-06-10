var mysql = require('mysql');
// connection configurations
var dbConn = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'carros',
  debug: false,
})
// connect to database
module.exports = dbConn;
