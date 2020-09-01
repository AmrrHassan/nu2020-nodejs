const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());


const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

Author = require('./model/author');
Book = require('./model/book');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Please use /api/books or /api/author');
});

app.get('/api/author', (req, res) => {
  Author.getAuthor((err, author) => {
    if (err) {
      throw err;
    }
    res.json(author);
  });
});

app.post('/api/author', (req, res) => {
  const author = req.body;
  Author.addAuthor(author, (err, author) => {
    if (err) {
      throw err;
    }
    res.json(author);
  });
});

app.put('/api/author/:_id', (req, res) => {
  const id = req.params._id;
  const author = req.body;
  Author.updateAuthor(id, author, {}, (err, author) => {
    if (err) {
      throw err;
    }
    res.json(author);
  });
});
app.delete('/api/author/:_id', (req, res) => {
  const id = req.params._id;
  const author = req.body;
  Author.removeAuthor(id, (err, author) => {
    if (err) {
      throw err;
    }
    res.json(author);
  });
});

app.listen(3000);
