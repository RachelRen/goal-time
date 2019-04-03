const GoalsService = require('./../services/goals')
const GoalCode = require('../codes/goal');
const {dateFormat} = require('../../util/index');


module.exports = {
	async getList(ctx){
		const formData = ctx.request.body
	    const result = {
	      success: false,
	      message: '',
	      data: null,
	      code: ''
	    }
	    const list = await GoalsService.getList();
	    list.forEach(item => {
	    	item.create_timeStr = !item.create_time ? ""  : dateFormat(item.create_time, "yyyy-MM-dd");
	    	item.last_timeStr = !item.last_time ? "" : dateFormat(item.last_time, "yyyy-MM-dd");
	    })
	    result.data = list;
	    ctx.body = result;
	},

	async add(ctx){
		const formData = ctx.request.body
	    const result = {
	      success: false,
	      message: '',
	      data: null,
	      code: ''
	    }
	    //查看信息是否缺
	    const validateResult = GoalsService.validatorGoal(formData);
	    if(!validateResult.success){
	    	result.message = validateResult.message;
	    	ctx.body = result;
	    	return;
	    }
		//查看是否已经存在
		const esitOne = await GoalsService.getExistOne(formData);
		if(esitOne){
			result.message = GoalCode.FAIL_GOAL_NAME_IS_EXIST;
			ctx.body = result;
			return;
		}
		//将信息塞入数据库中
		const goalInfo = Object.assign(formData, {
			create_time: new Date().getTime(),
			count: 0
		})
		const goalResult = await GoalsService.create(goalInfo);
		result.success = true;
		ctx.body = result;
	}
}