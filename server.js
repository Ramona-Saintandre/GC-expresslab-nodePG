// require the Express module
const express = require("express");
const cartItems = require("./cartItems");
const cors = require("cors");

// creates an instance of an Express server this is referencing the const express
const app = express();

// define the port
const port = 8080;

//convert to json
app.use(express.json());
app.use(cors());

// request
// app.use('/', __dirname,cartItems);

// Endpoints

// get json array of all items in the cart-items
//  status code 200

app.get("/cartItems", function(req, res) {
  // req is declared but never used error message, need to find out what this means
  // https://flaviocopes.com/express-request-parameters/
  res.status(200); //ok
  console.log(req.body);
  res.json(cartItems);
  // res.send(cartItems); // this is a variable in cartItems, but not being read not sure why , to many issues not enough time
});

// get json response of :id
// status code 200
app.get("/cartItems/:id", function(req, res) {
  console.log(req.body); //data being extracted from the URL
  res.status(200); //ok
  return res.json(cart - items, id[req.params.index]); // need to get stuff from the array
  res.send("get ID for item in the cart.." + req.params.id);
});

// add a cart item to the array using the json body of the request , generate a unique id for that ID
// status code 201
app.post("/cartItems", function(req, res) {
  // missing something here ? need to find out what you use to add to the array
  cartItems.push(req.body);
  res.status(201); // created
  console.log(req.body); //data being extracted from the URL
  res.send("Add items to the cart ..");
});

// update the cart in the that has a unique id, use JSON body as the new porperty
//  response 200

app.put("/cartItems/:id", function(req, res) {
  // need to research something to find an array index
  const index = cartItems.findIndex(cartItem => cartItem.id == req.params.id);
  cartItems.splice(index, 1, req.body);

  // missing something here ? need push to add item from the array
  res.status(200); //ok
  console.log(req.params.id); //URL paramaters
  res.send("Update items in the cart ..");
});

// remove the item from the array that has the given id
// response status 204
app.delete("/cartItems/:id", function(req, res) {
  // need to do a splice here to remove items from the array, I think
  res.status(204); //no content
  cartItems.splice(index, 1); //remove an item from the cart, not sure about the -1
  console.log(cartItems.findIndex(cartItem => cartItem.id == req.params.id));
  //    console.log(req.params.id);  //URL parameters
  res.send("Delete items from the cart .. ");
});

// update the cart item in the array that has the given id , use the JSON body
// run the server

app.listen(port, () => console.log(`Listening on port: ${port}.`));
console.log("Listening at http://localhost:8080/cart-items...");
