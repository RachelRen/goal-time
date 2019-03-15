const mysql      = require('mysql');
const config = require('./config.db');
const dbConfig = config.database
const connection = mysql.createConnection({
	host     :  dbConfig.HOST,
  	user     :  dbConfig.USERNAME,
  	password :  dbConfig.PASSWORD,
});
 


connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("CREATE DATABASE goal_time", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});