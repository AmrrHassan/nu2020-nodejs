const express = require('express');
const app = express();
app.use(express.json());


const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

  const Schema = mongoose.Schema;

  const personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  });

  const storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
  });

  const Story = mongoose.model('Story', storySchema);
  const Person = mongoose.model('Person', personSchema);
//=================================================
//   const author = new Person({
//     _id: new mongoose.Types.ObjectId(),
//     name: 'Ian Fleming',
//     age: 50
//   });
//   console.log(author.name);
//   author.save(function (err) {

//     if (err) return handleError(err);

//     const story1 = new Story({
//       title: 'Casino Royale',
//       author: author._id    // assign the _id from the person
//     });


//     story1.save(function (err) {

//         console.log(story1.title+" author id: "+story1.author);

//       if (err) return handleError(err);
//       // that's it!

//     });
//   });

  Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"
  });

app.listen(3000);
