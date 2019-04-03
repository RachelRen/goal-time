function fixed(val){
	return val >= 10 ? val : "0" + val;
}
function dateFormat(value, format="yyyy-MM-dd HH:mm"){
	var maps = {
		"yyyy": function(data){
			return data.getFullYear();
		},
		"MM": function(data){
			return fixed(data.getMonth() + 1);
		},
		"dd": function(data){
			return fixed(data.getDate());
		},
		"HH": function(data){
			return fixed(data.getHours());
		},
		"mm": function(data){
			return fixed(data.getMinutes())
		}
	};
	var trunk = new RegExp(Object.keys(maps).join("|"), "g"),
		date = new Date(+value);
	return format.replace(trunk, function(capture){
		return maps[capture] ? maps[capture](date) : "";
	});
}

module.exports = {
	dateFormat,
}