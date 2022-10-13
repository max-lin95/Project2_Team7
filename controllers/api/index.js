const router = require('express').Router();

const homeRoutes = require('./user-routes');

router.use('/', homeRoutes);

module.exports = router;
