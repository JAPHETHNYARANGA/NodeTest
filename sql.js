var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'gator3004.hostgator.com',
  user     : 'startger_tester',
  password : 'MWb>&(U5FN%2',
  database : 'startger_ideal'

});
 
connection.connect();
 
connection.query('SELECT temp, humidity, i_date, i_time FROM sensorsdata', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 