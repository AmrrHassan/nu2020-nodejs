

const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.send("<h1>Hello Amr</h1> <br> <hr>");
});


app.get("/contact", function(req, res){
  res.send("Contact me at.....");
});



app.get("/about", function(req, res){
  res.send("my name is slim shady");
})

app.listen(3000, function(){
  console.log("Server started: Port 3000")
});
