const router = require('koa-router')();

const home = require('./home');
// const admin = require('./admin');
const goals = require('./goals');

router.use('/', home.routes(), home.allowedMethods());
// router.use('/admin', admin.routes(), admin.allowedMethods());
router.use('/api', goals.routes(), goals.allowedMethods());

module.exports = router;
