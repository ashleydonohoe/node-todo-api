// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err) {
    console.log("Unable to connect to MongoDB server");
  }

  console.log("Connected to MongoDB server");

  // // deleteMany
  // db.collection("Todos").deleteMany({text: "Pay bills"}).then((result) => {
  //     console.log(result);
  // });
  //
  // //deleteOne
  // db.collection("Todos").deleteOne({text: "Eat dinner"}).then((result) => {
  //   console.log(result);
  // });
  //
  // //findOneAndDelete
  // db.collection("Todos").findOneAndDelete({text: "Go to school"}).then((result) => {
  //     console.log(result);
  // });

  db.collection("Users").deleteMany({name: "Laura"}).then((result) => {
    console.log(result);
  });

  db.collection("Users").findOneAndDelete({_id: new ObjectID("59013954f29eb484d869a769")}).then((result) => {
      console.log(result);
  });

  // db.close();
});
