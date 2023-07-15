const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name:String,
  link:String,
  current_price:Number,
  original_price:Number,
  discounted:Boolean,
  thumbnail:String,
  query_url:String,
  category:{type:String,required:true,default:'coolsummer'}
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = { ProductModel };
