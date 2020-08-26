const express = require('express');

const app = express();

let products = [
    {id:1,name:"Noodles",price:10.5},
    {id:2,name:"Milk",price:20.5},
    {id:3,name:"Egg",price:1.5},
    {id:4,name:"Rice",price:10.5},
    {id:5,name:"Pepsi",price:5.0},
];



app.get('/', function (req, res) {
    res.send("Hello");
});

app.get('/products', function (req, res) {
    res.json(products);
});

app.post('/products', function (req, res) {
    let product = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(protduc);
    res.send(product);
});

 app.put('/products/:id', function (req, res) {
    let ids = parseInt(req.params.id);
    const product = products.find(p => p.id === ids);
    product.name = req.body.name;
    product.price = req.body.price
    res.send(product);
  }) 

app.delete('/products/:id', function (req, res) {
    res.send("Delete Product with id = " + parseInt(req.params.id));
});


app.listen(3002);
