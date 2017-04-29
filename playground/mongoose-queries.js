const {ObjectID} = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// let id = "5904088504c7d7848efccc3a";
// let id2 = "6904088504c7d7848efccc3a111";
//
// if(!ObjectID.isValid(id2)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log(todos);
// });

// Todo.findById(id2).then((todo) => {
//   if(!todo) {
//     return console.log("Id not found");
//   }
//   console.log(todo);
// }).catch((e) => {
//   console.log(e);
// });
let userID = "5902b275c7917c81749b3669";
User.findById(userID).then((user) => {
  if(!user) {
    return console.log("User not found");
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
  console.log(e);
});
