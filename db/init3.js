var mysql      = require('mysql');

const getSqlContentMap = require('./util/get-sql-content');

const {query} = require('./util/db');


const config = require('./config.db');
const dbConfig = config.database
var connection = mysql.createConnection({
	host     :  dbConfig.HOST,
  	user     :  dbConfig.USERNAME,
  	password :  dbConfig.PASSWORD,
    database :  dbConfig.DATABASE
});

const sqlContentMap = getSqlContentMap();

// function initTable(){
    
// }

const createAllTables = async ()=> {
	for(let key in sqlContentMap){
		let sqlShellContent = sqlContentMap[key];

		let sqlShellList = sqlShellContent.split(";")

		console.log("sqlShell", sqlShellList);
		for(let [index, sqlShell] of sqlShellList.entries()){
			if(sqlShell.trim()){
				console.log("sqlShell", sqlShell);
				let result = await query( sqlShell )
	    		console.log("result.serverStatus", result.serverStatus);
			}
			
		}

		
	}
    
    // result.serverStatus
}

createAllTables();
