const fs = require('fs')
// const walkFile = require('./walk-file')

/**
 * 获取sql目录下的文件目录数据
 * @return {object} 
 */
function getSqlMap () {
  let basePath = __dirname
  basePath = basePath.replace(/\\/g, '\/')
  console.log("basePath 1", basePath);

  let pathArr = basePath.split('\/')
  pathArr = pathArr.splice( 0, pathArr.length - 1 )
  basePath = pathArr.join('/') + '/sql/'
  console.log("basePath", basePath);
  let files = fs.readdirSync( basePath )
  console.log("files", files)
  // let fileList = walkFile( basePath, 'sql' )
  return files
}

module.exports = getSqlMap