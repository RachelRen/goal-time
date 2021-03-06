const router = require('koa-router')();

const home = require('./home');
// const admin = require('./admin');
const goals = require('./goals');
const icons = require('./icons');
const punch = require('./punch');

router.use('/', home.routes(), home.allowedMethods());
// router.use('/admin', admin.routes(), admin.allowedMethods());
router.use('/api/goal', goals.routes(), goals.allowedMethods());
router.use('/api/icon', icons.routes(), icons.allowedMethods());
router.use('/api/punch', punch.routes(), punch.allowedMethods());

module.exports = router;
