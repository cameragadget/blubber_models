var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blubber_app");

var User = require("./models/User"),
    Thread = require("./models/Thread");


Thread.remove({}, function(err, results){
  User.remove({}, function(err, results){
    User.create([
        { name: 'John Marshall',              email: "John@john.com" ,       moderator: true},
        { name: 'Oliver Wendell Holmes, Jr.', email: 'Oliver@oliver.com'},
        { name: 'Thurgood Marshal',           email: 'Thurgood@thurgood.com'},
        { name: "Sandra Day O'Connor",         email: 'Sandra@sandra.com'},
      ], function(err, users) {
      if (err) console.log(err);
      console.log(users);
      var john = users[0];
      var thur = users[2];
        // create threads
        Thread.create([{name: "YOLO", creator: john, creatorName: john.name},
                       {name: "Bah Humbug", creator: thur, creatorName: thur.name}
          ],
          function(err, thread) {
            if (err) console.log(err);
            console.log(thread);
            mongoose.connection.close();
        });
    });
  });
});











