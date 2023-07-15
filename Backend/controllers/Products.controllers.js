const express = require("express");
const ProductController = express.Router();
const { ProductModel } = require("../models/Product.model");

ProductController.get("/", async (req, res) => {
  try {
    const product = await ProductModel.find({});
    if (!req.query.page && !req.query.search) {
      const product = await ProductModel.find({});
      if (product.length > 0) {
        res.status(200).json(product);
      } else {
        res.status(200).json({ message: "No Product Found!" });
      }
    } else {
      const page = parseInt(req.query.page) || 1;
      const limit = 20;
      const search = req.query.search;

      const filter = {};
      if (search) {
        filter.category = { $regex: search, $options: "i" };
      }
      try {
        const data = await ProductModel.find(filter)
          .skip((page - 1) * limit)
          .limit(limit);
        res.status(200).json(data);
      } catch (error) {
        res.status(404).json({ message: "Something went wrong" });
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = { ProductController };
