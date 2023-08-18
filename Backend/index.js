const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { UserController } = require("./controllers/Users.controllers");
const { ProductController } = require("./controllers/Products.controllers");
const { authenticate } = require("./middleware/authenticate");
const { CartController } = require("./controllers/AddToCart.controllers");
const { SavedItemController } = require("./controllers/SavedItem.controller");
const { OrderController } = require("./controllers/Order.controllers");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", UserController);

app.use("/products", ProductController);

app.use(authenticate);

app.use("/addtocart", CartController);

app.use("/saveditem", SavedItemController);

app.use("/orderitem", OrderController);

const port = process.env.PORT;

connection.then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log("Connected to DB");
  });
});
