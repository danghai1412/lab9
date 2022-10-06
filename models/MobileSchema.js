var mongoose = require("mongoose");
var schema = mongoose.Schema;
var model = mongoose.model;

var MobileSchema = schema({
  name: String,
  brand: String,
  image: String,
  price: Number,
});

var MobileModel = model("Điện thoại", MobileSchema, "mobile");

module.exports = MobileModel;