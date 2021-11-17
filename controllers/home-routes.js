const router = require("express").Router();
const path = require("path");



//Routes user to Homepage html
router.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + "../../public/index.html"));
});

//Routes user to Excercise html
router.get('/exercise', (req, res) =>{
  res.sendFile(path.join(__dirname + "../../public/exercise.html"));
});

// Routes user to Stats html
router.get('/stats', (req, res) =>{
  res.sendFile(path.join(__dirname + "../../public/stats.html"));
});

module.exports = router;