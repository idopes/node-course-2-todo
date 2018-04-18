const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDV server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5ad650f87f3ab6090016e789')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos Count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })

  db.collection('Users').find({name: 'Ido Samet'}).toArray().then((users) => {
    console.log('this is the users: ');
    console.log(JSON.stringify(users, undefined, 2));
  }, (err) => {
    console.log('there was an error');
  });

  // db.close();
});
