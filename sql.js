var mysql      = require('mysql');
const env = require("dotenv");

env.config()

var connection = mysql.createConnection({
  host     : process.env.host,
  user     : process.env.user ,
  password : process.env.password,
  database : process.env.database

});


 
connection.connect();
 
connection.query('SELECT * FROM `sensorsdata` ORDER BY `sensorsdata`.`id` DESC LIMIT 20', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 