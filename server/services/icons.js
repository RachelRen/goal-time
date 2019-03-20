const IconModal = require('../models/icons.js');

const IconsService = {
	getList(){
		return IconModal.getIcons();
	}
}



module.exports = IconsService