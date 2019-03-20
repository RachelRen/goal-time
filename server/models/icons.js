const fs = require('fs')
const getIcons = require('../../db/getIcon');

const IconModal = {
	getIcons(){
		const icons = getIcons();
		return icons;
	}
};

module.exports = IconModal