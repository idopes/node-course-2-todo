const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "5adc8304ea55c0c01beb20c0";
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found')
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var userID = "5ad8dc073e6003dc31d908c9";

User.findById(userID).then((user) => {
  if (!user) {
    return console.log('ID not found')
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
