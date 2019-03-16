const fs = require('fs')

function getIcons(){
	let basePath = __dirname;
	console.log("basePath 1", basePath);
	basePath = basePath.replace(/\\/g, '\/');
	let baseArr = basePath.split("\/");
	baseArr.splice(baseArr.length -1, 1);

	let iconFile = baseArr.join("\/") + "\/static\/src\/assets\/icons\/iconfont.css"
	console.log("iconFile", iconFile);

	const content = fs.readFileSync(iconFile, 'binary');
	console.log("content", content);
}
getIcons();
