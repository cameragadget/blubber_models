var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blubber_app");

var User = require("./models/User"),
    Thread = require("./models/Thread");

 ///single item
Thread.find();

// all items
Thread.find({}, function(err, threads){
  console.log(threads);
  mongoose.connection.close();
});




