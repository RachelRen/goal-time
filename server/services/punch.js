
const PunchModal = require('../models/punch');

const GoalsService = {
	async getList(){
		return await PunchModal.getList();
	},
	async create(punch){
		const result = await PunchModal.create(punch);
		return result;
	},

	
	async getExistOne(goal){
		return await PunchModal.getExistOne(goal);
	}
}



module.exports = GoalsService