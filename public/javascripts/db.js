var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456'
});

connection.connect();

connection.query('SELECT * from hmdml.sys_role_b', function(err, rows, fields) {
  if (err) throw err;
  console.log('The role_name is: ', rows[0]);
});

connection.end();