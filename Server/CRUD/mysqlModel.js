const dbConn = require('../Model/db');

let mysqlModel = {};

mysqlModel.insertCar = (dataCar, handler) => {
  dbConn.connect(function (err, connect) {
      if (err) {
        connect.release();
          throw err;
      }
       dbConn.query('insert into pdv  SET ?', dataCar),
          (err, result) => {
              if (!err) {
                  handler(null, {
                      'resultado: ': result
                  });
              }
          }
  });
}
module.exports = mysqlModel;
