const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id:'5c617b4b2b0ee92e2bab544a'}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5c6179de2b0ee92e2bab5449').then((todo) => {
    console.log(todo);
});