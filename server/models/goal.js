const { query } = require('../../db/util/db');


const GoalModal = {
	async getExistOne(options) {
	    let sql = `
	    SELECT * from goal
	      where name="${options.name}"
	      limit 1`

	    let result = await query( sql )
	    if ( Array.isArray(result) && result.length > 0 ) {
	      	result = result[0]
	    } else {
	      	result = null
	    }
	    return result
	},
	async create(options){
	  		const sql = "INSERT INTO ?? SET ?";
	  		const result = await query( sql, [ "goal", options ] );
  		return result;
	},
	async getList(){
		let  sql =  "SELECT ?? FROM ?? "
  		return await query( sql, [ ['id', 'name','iconName','comment_info', 'create_time', 'last_time' ,'count'], "goal" ] )
	},
	async getGoalById(id){
		const sql = "SELECT * FROM ?? WHERE id = ?";
		return await query( sql, [ "goal",  id] )
	},
	async updateGoalById(goal, id){
		debugger;
		const sql = "UPDATE ?? SET ? WHERE id = ?"
		return await query( sql, [ "goal", goal,  id] )
	}
}

module.exports = GoalModal;