var mongoose = require('mongoose');

//comment schema

var commentSchema = new mongoose.Schema({
  author:   {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User"
            },
  body:     {type: String, required: true},
  comments: [this]
});


// post schema

var postSchema = new mongoose.Schema({
  author:   {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User"
            },
  title:    {type: String, required: true},
  body:     {type: String, required: true},
  upvotes:  {type: Number, default: 0},
  comments:  [commentSchema]
});




// thread schema

var threadSchema = new mongoose.Schema({
  name:           {type: String, required: true},
  creator:        {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                  },
  creatorName:    String,
  posts:          [postSchema]
});





//model definition

var Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;
