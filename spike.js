var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blubber_app");

var User = require("./models/User"),
    Thread = require("./models/Thread");

 ///single item
// Thread.find();

// all items
// Thread.find({}, function(err, threads){
//   console.log(threads);
//}):"


// or
Thread.findOne({}, function(err, threads){
  console.log(threads);
  mongoose.connection.close();
});

//   User.findById(thread.creator, function(err, user){
//     console.log(user);
//      mongoose.connection.close();
//   });
// });

// Thread.find({}).populate("creator").exec(function(err, thread){
//   console.log(thread);
//   mongoose.connection.close();
// });






