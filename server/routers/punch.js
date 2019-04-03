const router = require('koa-router')()
const punch = require('../controllers/punch.js');




const routers = router
	.post( '/add', punch.add )
	
module.exports = routers