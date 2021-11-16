const router = require("express").Router();
const {Workout}= require("../../models")

router.get("/", async (req, res)=> {
  const exercises = await Workout.find({})
  console.log(exercises)
  res.json(exercises)
})

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


router.post("/", (req, res) => {
    Workout.create({})
      .then((data) => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });








module.exports= router;