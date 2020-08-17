// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
//
// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/index.html");
// });
//
//
// app.post("/", function(req, res) {
//     var name = req.body.name;
//     var email = req.body.email;
//     var phone = req.body.phone;
//     var message = req.body.message;
//
//     res.sendFile(__dirname + "/index.html");
//     console.log(name, email, phone, message );
// });
//
// app.listen(3000,function() {
//     console.log("server started");
// });

//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-rajat:fdfffUmxQlIUZYFD@cluster0.jqeey.mongodb.net/foodwebsiteDB", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);
const itemsSchema = {
  name: String,
  email: String,
  phone: String,
  message: String
};

const Item = mongoose.model("Item", itemsSchema);
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
      var name = req.body.name;
      var email = req.body.email;
      var phone = req.body.phone;
      var message = req.body.message;
  const itemX = new Item({
    name: name,
    email: email,
    phone: phone,
    message: message
  });

    itemX.save();
    res.redirect("/");
  });
  let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function() {
  console.log("Server started ");
});
