var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoo_db'
});

connection.connect(function(err) {
  if (err) {
      console.error('error connecting: ' + err.stack);
  return;
    };
    //console.log('connected as id ' + connection.threadId);
});


promt.start();
promt.message='';

