const express = require("express");
const ProductController = express.Router();
const { ProductModel } = require("../models/Product.model");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

ProductController.get("/", async (req, res) => {
  try {
    const product = await ProductModel.find({});
    if (!req.query.page && !req.query.search && !req.query.sort) {
      const product = await ProductModel.find({});
      if (product.length > 0) {
        res.status(200).json(product);
      } else {
        res.status(200).json({ message: "No Product Found!" });
      }
    } else {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const search = req.query.search;
      const sort = req.query.sort;

      const filter = {};
      if (search) {
        filter.category = { $regex: search, $options: "i" };
      }
      try {
        const data = await ProductModel.find(filter)
          .skip((page - 1) * limit)
          .limit(limit);

        if (sort) {
          const sortedData = data.slice().sort((a, b) => {
            if (sort === "desc") {
              return b.current_price - a.current_price;
            }else if (sort === 'asc'){
              return a.current_price - b.current_price;
            }
          });
          res.status(200).json(sortedData);
        } else {
          res.status(200).json(data);
        }
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

ProductController.post("/", (req, res) => {
  try {
    const products = req.body;
    let arr = [];
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
        "X-RapidAPI-Key": "your-rapidapi-key",
      },
    };
    // console.log(products);
    products.map((item) => {
      let url = item.query_url;
      fetch(url, options)
        .then((res) => res.json())
        .then(async (json) => {
          // console.log(json);
          const productData = await ProductModel.insertMany(json);
          res.status(200).json({ message: "Product Added Successfully" });
        })
        .catch((err) => console.error("error:" + err));
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
});

ProductController.delete("/", async (req, res) => {
  try {
    const query = { thumbnails: { $size: 0 } };
    const deletedItem = await ProductModel.deleteMany(query);
    console.log(deletedItem);
    res.status(404).json({ message: "Deleted Successfully", deletedItem });
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = { ProductController };
