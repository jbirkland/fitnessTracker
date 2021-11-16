const router = require('express').Router();
const workoutRts = require('./workoutRts')

router.use('/workouts', workoutRts);

module.exports = router;