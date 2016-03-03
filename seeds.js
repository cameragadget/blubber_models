var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blubber_app");


//schema
var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  moderator: { type: Boolean, default: false }
});


//model
var User = mongoose.model("User", userSchema);

User.remove({}, function(err, results){
  User.create([
      { name: 'John Marshall',              email: "John@john.com" ,       moderator: true},
      { name: 'Oliver Wendell Holmes, Jr.', email: 'Oliver@oliver.com'},
      { name: 'Thurgood Marshal',           email: 'Thurgood@thurgood.com'},
      { name: "Sandra Day O'Connor",         email: 'Sandra@sandra.com'},
    ], function(err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
    mongoose.connection.close();
  });
});











