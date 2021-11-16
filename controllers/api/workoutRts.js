const router = require("express").Router();
const {Workout}= require("../../models")

router.get("/", async (req, res)=> {
  const exercises = await Workout.find({})
  console.log(exercises)
  res.json(exercises)
})

router.put("/", async (req, res) => {
console.log("hello world")
res.send("HELLO WORLD")
})

router.post("/", async (req, res) => {
  console.log("hello world")
  res.send("HELLO WORLD")
})








module.exports= router;