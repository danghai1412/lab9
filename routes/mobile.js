const express = require("express");
const MobileModel = require("../models/MobileSchema");
const router = express.Router();

router.get("/", (req, res) => {
  MobileModel.find((err, data) => {
    if (!err) {
      res.render("mobile/index", { mobiles: data });
    }
  });
});

router.get("/add", (req, res) => {
  res.render("mobile/add");
});

router.post("/add", (req, res) => {
  var mobile = new MobileModel(req.body);
  mobile.save((err) => {
    if (!err) {
      console.log("Add mobile succeed !");
      res.redirect("/mobile");
    }
  });
});

router.get("/detail/:id", (req, res) => {
  //lấy giá trị id của document gửi từ url
  var mobile_id = req.params.id;
  //tìm kiếm document trong collection theo id
  MobileModel.findById(mobile_id, (err, data) => {
    if (!err) {
      //render ra file detail chứa dữ liệu của document
      res.render("mobile/detail", { mobile: data });
    }
  });
});

module.exports = router;
