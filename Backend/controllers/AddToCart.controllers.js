const express = require("express");
const CartController = express.Router();
const { CartModel } = require("../models/AddToCart.model");
const { OrderModel } = require("../models/Order.model");

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
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(404).res({ message: error });
  }
});

CartController.delete("/", async (req, res) => {
  try {
    const orderItem  = req.body;
    const {userId} = req.body;
    orderItem.forEach(async (item) => {
      const order = new OrderModel({ ...item, userId });
      await order.save()
    });
    const deletedItem = await CartModel.deleteMany({
      userId: req.body.userId,
    });
    if (deletedItem) {
      res.status(200).json({ message: "Order Added Successfully and Cart Deleted Successfully" });
    } else {
      res.status(200).json({ message: "No Item found!" });
    }
  } catch (error) {
    res.status(404).json({ message: error });
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

CartController.patch("/qty/:savedId", async (req, res) => {
  try {
    const { savedId } = req.params;
    const { setquantity } = req.body;
    const updatedData = await CartModel.findByIdAndUpdate(
      { _id: savedId },
      { $set: { quantity: setquantity } }
    );
    res.status(200).json({ message: "Item Updated Successfully", updatedData });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
});

module.exports = { CartController };
