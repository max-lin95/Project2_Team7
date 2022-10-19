const router = require('express').Router();

const userRoutes = require('./user-routes');
const programRoutes = require('./programRoutes');
const workoutRoutes = require('./workoutRoutes');

router.use('/users', userRoutes);
router.use('/programs', programRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;
