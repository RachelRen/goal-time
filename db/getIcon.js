const fs = require('fs')

function getIcons(){
	let basePath = __dirname;
	basePath = basePath.replace(/\\/g, '\/');
	let baseArr = basePath.split("\/");
	baseArr.splice(baseArr.length -1, 1);

	let iconFile = baseArr.join("\/") + "\/static\/src\/assets\/icons\/iconfont.css"
	console.log("iconFile", iconFile);

	const content = fs.readFileSync(iconFile, 'binary');
	// var reg = /\.icon\-(\w+?)\:before/gmi;
	var reg = /\icon\-\w+?(?=\:before)/gim;
	const result = content.match(reg);
	return result

	console.log("result", result);
}

module.exports = getIcons;

