const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDV server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5ad746197a2a4c14fb36243f")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: ObjectID("5ad651fa41b4d04a1ce3b47b")
  }, {
    $set: {
      name: 'Ido Samet'
    },
    $inc: {
      age: -2
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // db.close();
});
