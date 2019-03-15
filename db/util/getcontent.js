const fs = require('fs')

// let basePath = __dirname



function getSqlContent(){
	let content = fs.readFileSync( "./db/util/db.sql", 'binary' );
	console.log("content", content);
	return content;
}

module.exports = getSqlContent

// console.log(content)