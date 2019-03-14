const router = require('koa-router')();

const home = require('./home');
// const admin = require('./admin');
// const userInfo = require('./api');

router.use('/', home.routes(), home.allowedMethods());
// router.use('/admin', admin.routes(), admin.allowedMethods());
// router.use('/api', userInfo.routes(), userInfo.allowedMethods());

module.exports = router;
