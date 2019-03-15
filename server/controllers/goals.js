const GoalsService = require('./../services/goals')
// const userCode = require('./../codes/user')
module.exports = {
	getList(ctx){
		let formData = ctx.request.body
	    let result = {
	      success: false,
	      message: '',
	      data: null,
	      code: ''
	    }
	    const list = GoalsService.getList();
	    result.data = list;
	    ctx.body = result;
	},

	
}