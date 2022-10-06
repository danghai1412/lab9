var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  var name = "Greenwich University";
  res.render("index", {data: name});
});

module.exports = router;
