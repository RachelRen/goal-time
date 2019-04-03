const { query } = require('../../db/util/db');


const PunchModal = {
	async getExistOne(options) {
	    let sql = `
	    SELECT * from goal
	      where id="${options.id}"
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
	  		const result = await query( sql, [ "goal_list", options ] );

	  		// const sql = "INSERT INTO ?? SET ?";
	  		// const result = await query( sql, [['id', 'goal_id', 'create_time'], "goal_list" ] );
  		return result;
	},
	async getList(){
		let  sql =  "SELECT ?? FROM ?? "
  		return await query( sql, [ ['id', 'goal_id', 'create_time'], "goal_list" ] )
	}
}

module.exports = PunchModal;