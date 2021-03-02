//this file might not be necessary

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// //bycrypt

// const userSchema = new Schema({
//   username: {type: String, required: true},
//   password: {type: String, required: true}
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;

// Author.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//   };

//   Author.addHook("beforeCreate", function(user) {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//   });
//   return Author;
// };