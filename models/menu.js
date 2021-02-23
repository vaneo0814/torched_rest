const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  title: {type: String, required: true},
  price: {type: String, required: true},
  body: {type: String, required: true}
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;