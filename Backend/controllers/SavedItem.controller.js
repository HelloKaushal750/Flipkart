const express = require("express");
const SavedItemController = express.Router();
const { CartModel } = require("../models/AddToCart.model");
const { SavedItemModel } = require("../models/SavedItem.model");

SavedItemController.get("/", async (req, res) => {
  try {
    const saveditem = await SavedItemModel.find({ userId: req.body.userId });
    res.status(200).json(saveditem);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

SavedItemController.post("/:saveditemid", async (req, res) => {
  try {
    const { saveditemid } = req.params;
    const deletedItem = await CartModel.findOneAndDelete({
      _id: saveditemid,
      userId: req.body.userId,
    });
    const {
      category,
      name,
      current_price,
      original_price,
      discounted,
      discount_percent,
      rating,
      in_stock,
      share_url,
      seller,
      thumbnails,
      highlights,
      offers,
      specs,
      quantity,
      productId,
      userId,
    } = deletedItem;
    const item = new SavedItemModel({
      category,
      name,
      current_price,
      original_price,
      discounted,
      discount_percent,
      rating,
      in_stock,
      share_url,
      seller,
      thumbnails,
      highlights,
      offers,
      specs,
      quantity,
      productId,
      userId,
    });
    await item.save();
    res.status(200).json({ message: "Item added successfully to saved" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
});

SavedItemController.delete("/:movetocartid", async (req, res) => {
  try {
    const { movetocartid } = req.params;
    const deletedItem = await SavedItemModel.findOneAndDelete({
      _id: movetocartid,
      userId: req.body.userId,
    });
    const {
      category,
      name,
      current_price,
      original_price,
      discounted,
      discount_percent,
      rating,
      in_stock,
      share_url,
      seller,
      thumbnails,
      highlights,
      offers,
      specs,
      quantity,
      productId,
      userId,
    } = deletedItem;
    const item = new CartModel({
      category,
      name,
      current_price,
      original_price,
      discounted,
      discount_percent,
      rating,
      in_stock,
      share_url,
      seller,
      thumbnails,
      highlights,
      offers,
      specs,
      quantity,
      productId,
      userId,
    });
    await item.save();
    res.status(200).json({ message: "Item added successfully to cart" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
});

SavedItemController.delete("/removeitem/:savedId", async (req, res) => {
  try {
    const { savedId } = req.params;
    const deletedItem = await SavedItemModel.findOneAndDelete({
      _id: savedId,
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

SavedItemController.patch("/quantity/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { setquantity } = req.body;
    const updatedData = await SavedItemModel.findByIdAndUpdate(
      { _id: id },
      { $set: { quantity: setquantity } }
    );
    res.status(200).json({ message: "Item Updated Successfully", updatedData });
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = { SavedItemController };
