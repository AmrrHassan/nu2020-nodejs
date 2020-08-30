const express = require('express');

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Successfully connected");
});

const productSchema = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number
});

const Product = mongoose.model('Product', productSchema);
// create
const product = new Product({
  _id: new mongoose.Types.ObjectId(),
  name: "Pen",
  price: 2.00
 });

product
  .save()
  .then(result=>{
    console.log(result);
  })
  .catch(err=> {
    console.log(err);
  });

// read
Product.findOne({_id:"5f46ac097e2c98085c25cf40"})
  .exec()
  .then(prod => {
           console.log("product: "+prod.name+", price: "+prod.price);
    })
    .catch(err => {
      console.log(err);
    });

//update
 //edit product by id
 let id="5f46ac097e2c98085c25cf40";
 Product.update({ _id: id },{price:100})
 .exec()
 .then(result => {
        console.log(result);
 })
 .catch(err => {
   console.log(err);
 });

 //delete
 // remove product by id
 Product.remove({_id:"5f46c8346b5641170431352e"})
 .exec()
 .then(result => {
        console.log(result);
 })
 .catch(err => {
   console.log(err);
 });


const milk = new Product({
  name: 'milk', price: 3
});

//list all products(find all products)
Product.find()
    .exec()
    .then(prod => {
        for(i=0;i<prod.length;i++)
           console.log(prod[i].name+", id: "+prod[i]._id+" price:"+prod[i].price);

    })
    .catch(err => {
      console.log(err);
    });

// Product.find(function (err, prod) {
//     if (err) return console.error(err);
//     console.log(prod);
//   })

// const Product = mongoose.model('Product', productSchema);

// before using mongoose
// const { MongoClient } = require("mongodb");
//
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";
//
// const client = new MongoClient(uri);
//
// async function run() {
//   try {
//     await client.connect();
//
//     const database = client.db('onlineShop');
//     const collection = database.collection('Product');
//
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await collection.findOne(query);
//
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
