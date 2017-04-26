// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err) {
    console.log("Unable to connect to MongoDB server");
  }

  console.log("Connected to MongoDB server");

  // db.collection("Todos").find({_id: ObjectID("59012548f29eb484d869a761")}).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });

  // db.collection("Todos").find().count().then((count) => {
  //   console.log("Todos count:", count);
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });

  db.collection("Users").find({name: "Laura"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
      console.log("Could not fetch users named Laura");
  });

  // db.close();
});
