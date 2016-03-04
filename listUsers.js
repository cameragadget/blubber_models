var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blubber_app");

var User = require("./models/User"),
    Thread = require("./models/Thread");

User.find({}, function(err, users){
  console.log(users);

  mongoose.connection.close();
});
