var mysql      = require('mysql');

const getSqlContent = require('./util/getcontent');

const {query} = require('./util/db');


const config = require('./config.db');
const dbConfig = config.database
var connection = mysql.createConnection({
	host     :  dbConfig.HOST,
  	user     :  dbConfig.USERNAME,
  	password :  dbConfig.PASSWORD,
    database :  dbConfig.DATABASE
});

const content = getSqlContent();

// function initTable(){
    
// }

const createAllTables = async ()=> {
    let result = await query( content )
    console.log("result.serverStatus", result.serverStatus);
    // result.serverStatus
}

createAllTables();
// connection.connect(function(err) {

//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE user_info (name VARCHAR(255), email VARCHAR(255), password VARCHAR(255))";
//     // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     // connection.query(sql, function (err, result) {
//       //   if (err) throw err;
//       //   // console.log("Table created");
//       //   console.log("1 record inserted");
//     // });
//     connection.query(sql, function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//         console.log("Table created");
//     });
//     // connection.query("CREATE DATABASE mydb", function (err, result) {
//    //   if (err) throw err;
//    //   console.log("Database created");
//     // });
// });

// // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
// //   if (error) throw error;
// //   console.log('The solution is: ', results[0].solution);
// // });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   connection.query("CREATE DATABASE goal_time", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });