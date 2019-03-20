const IconsService = require('./../services/icons')

module.exports = {
	getList(ctx){
		let formData = ctx.request.body
	    let result = {
	      success: false,
	      message: '',
	      data: null,
	      code: ''
	    }
	    const list = IconsService.getList();
	    result.data = list;
	    ctx.body = result;
	},

	
}