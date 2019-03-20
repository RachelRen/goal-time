const router = require('koa-router')()
const icons = require('../controllers/icons.js');





const routers = router
	.get( '/list', icons.getList )
	
module.exports = routers