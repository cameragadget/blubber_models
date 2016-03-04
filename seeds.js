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
      // console.log(users);
      var john = users[0];
      var thur = users[2];
        // create threads
        Thread.create([{name: "YOLO", creator: john, creatorName: john.name},
                       {name: "Bah Humbug", creator: thur, creatorName: thur.name}
          ],
          function(err, threads) {
            if (err) console.log(err);
              /// add some posts
              var yolo = threads[0];

              yolo.posts.push({
                author: john,
                title:  "Marbury vs. Madison",
                body:   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ipsum laborum sunt illo, iusto facilis error deserunt aliquid autem earum praesentium cupiditate est, dolores tenetur accusamus commodi, necessitatibus expedita eum."
              });

               yolo.posts.push({
                author: thur,
                title:  "something something, dark side",
                body:   "Minus ipsum laborum sunt illo, iusto facilis error deserunt aliquid autem earum praesentium cupiditate est, dolores tenetur accusamus commodi, necessitatibus expedita eum."
              });

              yolo.save(function(err, results){

                  var post = yolo.posts[0];

                  post.comments.push({
                    author: thur,
                    body: "pics or it didn't happen"
                  });
                  yolo.save(function(err, results) {
                    // console.log(err);
                    // console.log(results);
                     mongoose.connection.close();
                  });

              });

        });
    });
  });
});











