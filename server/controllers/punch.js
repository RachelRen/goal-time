const PunchService = require('./../services/punch')
const GoalsService = require('./../services/goals')
const PunchCode = require('../codes/punch');

module.exports = {
	async add(ctx){
		const formData = ctx.request.body
	    const result = {
	      success: false,
	      message: '',
	      data: null,
	      code: ''
	    }
	    
		//查看goal是否已经存在
		const esitOne = await PunchService.getExistOne(formData);
		if(!esitOne){
			result.message = PunchCode.ERROR_GOAL_IS_NOTEXIST;
			ctx.body = result;
			return;
		}
		//打卡
		const doTime = new Date().getTime();
		const punchInfo = Object.assign({}, {
			create_time: doTime,
			goal_id: formData.id
		})
		const goalResult = await PunchService.create(punchInfo);

		//更新
		//获取，再更新
		const goalList = await GoalsService.getGoalById(formData.id),
			goal = goalList[0];

		let count = goal.count || 0;
		
		const updateGoal = await GoalsService.updateGoalById({
			last_time: doTime,
			count: ++count
		}, goal.id);

		console.log("updateGoal", updateGoal);

		if(updateGoal){
			goal.count = count;
			result.success = true;
			result.data = goal;
			ctx.body = result;
			return;
		}

		
	}
}