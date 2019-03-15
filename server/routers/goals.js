const router = require('koa-router')()
const goals = require('../controllers/goals.js');





const routers = router
	.get( '/goal/list', goals.getList )
	
module.exports = routers