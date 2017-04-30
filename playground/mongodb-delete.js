const {ObjectID} = require("mongodb");
var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server//models/todo');
var {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log("removing");
// });

// Todo.findOneAndRemove()

//Todo.findByIdAndRemove

Todo.findByIdAndRemove("59056586f29eb484d869a76a").then((todo) => {
  console.log(todo);
});
