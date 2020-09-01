const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

const Schema = mongoose.Schema;

const storySchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  title: String,
  fans: [{
     type: Schema.Types.ObjectId,
      ref: 'Author'
    }],
  genre: String
});

const Story = mongoose.model("Story", storySchema);
