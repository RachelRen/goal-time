
const fs = require('fs');
// const getSqlContentMap = require('./util/get-sql-content-map');
const { query } = require('./util/db');


// 打印脚本执行日志
const eventLog = function( err , sqlFile, index ) {
  if( err ) {
    console.log(`[ERROR] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行失败 o(╯□╰)o ！`)
  } else {
    console.log(`[SUCCESS] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行成功 O(∩_∩)O !`)
  }
}

// 获取所有sql脚本内容
// let sqlContentMap = getSqlContentMap()

let shell = `CREATE TABLE   IF NOT EXISTS  `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `detail_info` longtext DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;`
// 执行建表sql脚本
const createAllTables = async () => {
  let result = await query( shell )
  if ( result.serverStatus * 1 === 2 ) {
    console.log('成功')
  } else {
    console.log('失败')
  }
  console.log('sql脚本执行结束！')
  console.log('请按 ctrl + c 键退出！')

}

createAllTables();