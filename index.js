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

var zoo = {
  welcome: function(){
    console.log("Welcome to the Zoo and Friends APp_!");
};

//creating key inside of zoo object
menu: function(){
  console.log("Enter (a): ------> to Add a new animal to the Zoo!");
  console.log("Enter (u): ------> to Update info on an animal in the Zoo!");
  console.log("Enter (v): ------> to Visit the animals in the Zoo!");
  console.log("Enter (d): ------> to Adopt an animal from the Zoo!");
  console.log("Enter (q): ------> to Quit and exit the Zoo!");
};

add : function(input_score) {
  var currentScope = input_score;
  console.log("To add an animal to the zoo please fill out the following form for us!")
}

prompt.get(['caretaker_ID', 'name', 'type', 'age'], function(err, result){
  
}
