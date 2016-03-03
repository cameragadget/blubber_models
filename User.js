var mongoose = require('mongoose');

//schema
var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  moderator: { type: Boolean, default: false }
});

//model
var User = mongoose.model("User", userSchema);

module.exports = User;










