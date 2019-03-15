var mysql      = require('mysql');

const getSqlFile = require('./util/get-sql-file');

// const {query} = require('./util/db');


// const config = require('./config.db');
// const dbConfig = config.database
// var connection = mysql.createConnection({
// 	host     :  dbConfig.HOST,
//   	user     :  dbConfig.USERNAME,
//   	password :  dbConfig.PASSWORD,
//     database :  dbConfig.DATABASE
// });

getSqlFile();