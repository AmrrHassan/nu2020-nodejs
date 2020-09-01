const express = require('express');
const app = express();

app.use(express.json());


const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

const Schema = mongoose.Schema;


const authorSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, "Please add name"]
  },
  age: Number,
  stories: [{
    type: Schema.Types.ObjectId,
    ref: 'Story'
  }]
});

const Author = mongoose.model("Author", authorSchema);

const testAuthor = new Author({
  _id: new mongoose.Types.ObjectId(),
  name: 'neymar storiesAdd',
  age: 37
  // stories: [story1]
});


console.log(testAuthor.name);
// testAuthor.save();

const storySchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  title: {
    type: String,
    required: [true, "Please add name"]
  },
  rating:{
    type: Number,
    min: 1,
    max: 10
 },
  fans: [{
     type: Schema.Types.ObjectId,
      ref: 'Author'
    }],
  genre: String
});

const Story = mongoose.model("Story", storySchema);

const story1 = new Story({
      title: 'storyTesting',
      author: testAuthor._id,  // assign the _id from the person
      rating: 7
    });

// story1.save();

const author = new Author({
    _id: new mongoose.Types.ObjectId(),
    name: 'Messi',
    age: 33
  });
console.log(author.name);
// author.save(function (err) {
    // if (err)
    //  return handleError(err)});

    const story6 = new Story({
      title: 'messi1',
      author: author._id,    // assign the _id from the person
      rating: 2
    });



    const story2 = new Story({
        title: 'messi2',
        author: author._id ,   // assign the _id from the person
        rating: 4
      });


      const story3 = new Story({
        title: 'messi99',
        author: author._id ,   // assign the _id from the person
        rating: 9
      });


      const story4 = new Story({
        title: 'Abkaryat 4',
        author: author._id ,   // assign the _id from the person
        rating: 1
      });



      const story5 = new Story({
        title: 'messi55',
        author: author._id ,   // assign the _id from the person
        rating: 4
      });
// story6.save();
// story2.save();
// story3.save();
// story4.save();
// story5.save();

// testAuthor.stories = [story1,story2,story3,story4,story5]
// // testAuthor.save();
// Author.find(function(err, artist){
//   if (err){
//     console.log(err);
//   }else{
//     artist.forEach(function(artists){
//             console.log(artists.name);
//     });
//
//   }
// });
//
// Author.
// find({name: 'Ronaldo'}).
// populate('author').
// exec(function (err, stories) {
// if (err){
//    return handleError(err);
//  }else{
//    for(i=0;i<stories.length;i++){
//        console.log('The author is %s', stories[i].name);
//        // prints "The author is Ian Fleming"
//    }
//  }
// });

// Story.
//   findOne({ title: 'Casino Royale' }).
//   populate('author').
//   exec(function (err, story) {
//     if (err) return handleError(err);
//     console.log('The author is ( Populate test )%s', story.author.name);
//     // prints "The author is Ian Fleming"
//   });

Story.findOne({ title: 'Casino Royale' }, function(error, story) {
if (error) {
  return handleError(error);
}
story.author = author;
console.log(story.author.name); // prints "Ian Fleming"
});

// Author.deleteOne({name:'test123'}, function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("Done");
//   }
// });

// ------------------------

// const author_new = new Author({
//    _id: new mongoose.Types.ObjectId(),
//    name: 'Spartaks',
//    age: 50,
//    stories: []
//
//  });
//  console.log(author_new.name);
//
//  author_new.save(function (err) {
//    if (err){
//      console.log(error);
//    }else{
//     console.log("Added new author")
// }
// });
//
//    const story_new = new Story({
//      title: 'Casino Royale',
//      author: author_new._id    // assign the _id from the person
//    });
//
//    story_new.save(function (err) {
//       if (err){
//        console.log(error);
//      }else{
//       console.log("Added new story")
//   }
// });
//      console.log(story1.title+" author id: "+story1.author);
//
//
//  Author.create([
//    {name:"fan1", age:20, _id:1},
//    {name:"fan2", age:20, _id:2},
//    {name:"fan3", age:20, _id:3},
//    {name:"fan4", age:20, _id:4},
//  ]);





app.listen(3000);
