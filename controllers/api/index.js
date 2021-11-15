const router = require('express').Router();
const workoutRts = require('./workout-routes')

router.use('/workouts', workoutRts);

module.exports = router;