const router = require('koa-router')()
const goals = require('../controllers/goals.js');





const routers = router
	.get( '/list', goals.getList )
	.post( '/add', goals.add )
	
module.exports = routers