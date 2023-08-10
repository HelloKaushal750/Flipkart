const express = require("express");
const CartController = express.Router();
const { CartModel } = require("../models/AddToCart.model");

CartController.post("/", async (req, res) => {
  try {
    const { userId } = req.body;
    const { _id, ...cartitem } = req.body;
    const item = new CartModel({
      productId: _id,
      ...cartitem,
      userId,
    });
    await item.save();
    res.status(200).json({ message: "Item added successfully" });
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

CartController.get("/", async (req, res) => {
  try {
    const userId = req.body.userId;
    const cartItem = await CartModel.find({ userId });
    console.log(cartItem);
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(404).res({ message: error });
  }
});

CartController.delete("/:cartitemid", async (req, res) => {
  try {
    const { cartitemid } = req.params;
    const deletedItem = await CartModel.findOneAndDelete({
      _id: cartitemid,
      userId: req.body.userId,
    });
    if (deletedItem) {
      res.status(200).json({ message: "Item Deleted Successfully" });
    } else {
      res.status(200).json({ message: "No Item found!" });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = { CartController };
