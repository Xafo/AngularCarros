var express = require('express');
var router = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors');

router.use(function (req, res, next) {
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
     res.setHeader('Access-Control-Allow-Credentials', true);
     next();
 });
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
var mysqlModel = require('./CRUD/mysqlModel');



var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'carros'
});

// connect to database
dbConn.connect();


// Retrieve all cars
router.get('/carros', function (req, res) {
    dbConn.query('SELECT * FROM carrosrv', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'car list.' });
    });
});

router.post('/carros', (req, res) => {
  const nCar = {
    'CodigoAresSun' : req.body.CodigoAresSun,
    'CodMarca' : req.body.CodMarca,
    'Modelo' : req.body.Modelo,
    'Ano'  : req.body.Ano,
    'Color' : req.body.Color,
    'Placa': req.body.Placa,
    'SerieMotor': req.body.SerieMotor,
    'VIM': req.body.VIM,
    'Cilindraje': req.body.Cilindraje,
    'FechaDeMatricula': req.body.FechaDeMatricula,
    'CodEnc': req.body.CodEnc,
    'KmActual': req.body.KmActual,
    'Ubicacion': req.body.Ubicacion
  };
  dbConn.query('INSERT INTO carrosrv set ?', nCar, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});

});
/*app.post('/carros', function (req, res) {

  let user = req.body.user;

  dbConn.query("INSERT INTO `carros`.`carrosrv` values ? ",
  { user: user },
  function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
  });
});*/
//END OF POST

// EJEMPLO POST
// INSERT INTO `carros`.`carrosrv`
//   (`CodigoAresSun`, `CodMarca`, `Modelo`, `Ano`, `Color`, `Placa`, `SerieMotor`, `VIM`, `Cilindraje`, `FechaDeMatricula`, `CodEnc`, `KmActual`, `Ubicacion`)
// VALUES(
// 'RV049','TOYOTA','HILUX','2018','ROJO-METALICO','HAA9651','2GD-4461240','8AJFB8CB101554933','2393','2019-07-31','EDGARDO ROMERO','50122','CHOLUTECA'
// );

/*
app.get('/mantenimientos', function (req, res) {
  dbConn.query('SELECT * FROM mantenimientos', function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'car list.' });
  });
});



// Add a new user



//  Update user with id
app.put('/user', function (req, res) {

    let user_id = req.body.user_id;
    let user = req.body.user;

    if (!user_id || !user) {
        return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
    }

    dbConn.query("UPDATE users SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
    });
});


//  Delete user
app.delete('/user', function (req, res) {

    let user_id = req.body.user_id;

    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    dbConn.query('DELETE FROM users WHERE id = ?', [user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
    });
});
*/
// set port
router.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = router;
