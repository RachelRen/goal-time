const router = require('koa-router')()
const goals = require('../controllers/goals.js');





const routers = router
	.get( '/list', goals.getList )
	
module.exports = routers