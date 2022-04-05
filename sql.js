var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'host',
  user     : 'user',
  password : 'password',
  database : 'database'

});
 
connection.connect();
 
connection.query('SELECT temp, humidity, i_date, i_time FROM sensorsdata', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 