const mongoose = require('mongoose');
// Author Schema

const Schema = mongoose.Schema;


const authorSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{
    type: Schema.Types.ObjectId,
    ref: 'Story'}]
});

const Author = (module.exports = mongoose.model("Author", authorSchema));

// find author

module.exports.getAuthor = function(callback, limit) {
  Author.find(callback).limit(limit);
};

// add Author
module.exports.addAuthor = function(author, callback) {
  Author.create(author, callback);
};


// Update Author
module.exports.updateAuthor = function(id, author, options, callback) {
  var query = { _id: id };
  var update = {
    name: author.name,
  };
  Author.findByIdAndUpdate(query, update, options, callback);
};
// Remove Author
module.exports.removeAuthor = function(id, callback) {
  var query = { _id: id };
  Author.remove(query, callback);
};
