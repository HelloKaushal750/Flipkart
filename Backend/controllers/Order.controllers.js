const express = require("express");
const OrderController = express.Router();
const { OrderModel } = require("../models/Order.model");

OrderController.get("/", async (req, res) => {
  try {
    const userId = req.body.userId;
    if (!req.query.search) {
      const orderItem = await OrderModel.find({ userId });
      if (orderItem.length > 0) {
        res.status(200).json(orderItem);
      } else {
        res.status(404).json({ message: "No Order Found!" });
      }
    } else {
      const search = req.query.search;
      const filter = {};
      if (search) {
        filter.name = { $regex: search, $options: "i" };
      }
      try {
        const data = await OrderModel.find(filter)
        res.status(200).json(data);
      } catch (error) {
        res.status(404).json({ message: "No Order Found!" });
      }
    }
  } catch (error) {
    res.status(404).res({ message: error });
  }
});

module.exports = { OrderController };
