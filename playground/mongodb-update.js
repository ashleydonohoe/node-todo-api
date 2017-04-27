// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err) {
    console.log("Unable to connect to MongoDB server");
  }

  console.log("Connected to MongoDB server");

  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("59012557f29eb484d869a762")
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection("Users").findOneAndUpdate({
    _id: new ObjectID("59001d2b59e08760ad57348b")
  }, {
    $set: {
      name: "Ashley"
    },
    $inc: {
      age: 1
    }},
    {
      returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

  // db.close();
});
