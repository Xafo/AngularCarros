// connection configurations
var dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'carros'
});
// connect to database
dbConn.connect();
