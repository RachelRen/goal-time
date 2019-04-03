
const GoalCode = require('../codes/goal');
const GoalModal = require('../models/goal');

const GoalsService = {
	async getList(){
		return await GoalModal.getList();
	},
	async create(goal){
		const result = await GoalModal.create(goal);
		return result;
	},

	validatorGoal(goal){
		const result = {
		    success: false,
		    message: '',
	    }
		if ( /[a-z0-9\_\-]{1,16}/.test(goal.name) === false ) {
	      	result.message = GoalCode.ERROR_GOAL_NAME
	      	return result
	    }
	    if ( /[a-z0-9\_\-]{1,16}/.test(goal.iconId) === false ) {
	      	result.message = GoalCode.ERROR_ICON
	      	return result
	    }

	    result.success = true

    	return result
	},

	async getExistOne(goal){
		return await GoalModal.getExistOne(goal);
	},
	async getGoalById(goalId){
		return await GoalModal.getGoalById(goalId)
	},
	async updateGoalById(goal, id){
		return await GoalModal.updateGoalById(goal, id)
	}
}



module.exports = GoalsService