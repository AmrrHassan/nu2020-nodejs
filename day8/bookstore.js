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
Author.
find().
populate('author').
exec(function (err, stories) {
if (err){
   return handleError(err);
 }else{
   for(i=0;i<stories.length;i++){
       console.log('The author is %s', stories[i].name);
       // prints "The author is Ian Fleming"
   }
 }
});

// Author.deleteOne({name:'test123'}, function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("Done");
//   }
// });




app.listen(3000);
