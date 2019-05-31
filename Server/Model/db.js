// connection configurations
var dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'carros'
});
// connect to database
dbConn.connect();
