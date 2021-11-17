const router = require("express").Router();
const {Workout}= require("../../models")

//Gets the previous workout
router.get("/", (req, res) => {
  Workout.aggregate([ { $addFields: { totalDuration: {$sum: "$exercises.duration" } } }, ])
    .then((data) =>{
      res.json(data)
    })
    .catch((err) =>{
      res.json(err)
    });
});

//Creates a new workout
router.post("/", (req, res) => {
  Workout.create({})
    .then((data) => {
       res.json(data);
    })
    .catch((err) =>{
      res.json(err)
    });
});

//Updates most current workout
router.put("/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true }
  )
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
});
// Displays the range of workouts
router.get("/range", (req, res) => {
  Workout.aggregate([ { $addFields: { totalDuration: {$sum: "$exercises.duration" } } }, ])
    .then((data) => {
    res.json(data)
  })
    .catch((err) => {
      res.json(err)
    });
  });






module.exports= router;