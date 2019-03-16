const fs = require('fs')
const getSqlMap = require('./get-sql-file')

/**
 * 读取sql文件内容
 * @param  {string} fileName 文件名称
 * @param  {string} path     文件所在的路径
 * @return {string}          脚本文件内容
 */
function getSqlContent(fileName, path) {
	let content = fs.readFileSync(path, 'binary')
	return content
	// sqlContentMap[ fileName ] = 
}

/**
 * 封装所有sql文件脚本内容
 * @return {object} 
 */
function getSqlContentMap() {
	let sqlContentMap = {},
		sqlMap = getSqlMap();

	for (let key in sqlMap) {
		sqlContentMap[key] = getSqlContent(key, sqlMap[key])
	}
	return sqlContentMap
}

module.exports = getSqlContentMap