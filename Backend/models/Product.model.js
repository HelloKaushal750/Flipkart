const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name:String,
  current_price:Number,
  original_price:Number,
  discounted:Boolean,
  discount_percent:Number,
  rating:Number,
  query_url:String,
  in_stock:Boolean,
  share_url:String,
  seller:Object,
  thumbnails:Array,
  highlights:Array,
  offers:Array,
  specs:Array,
  category:{type:String,required:true}
});

const ProductModel = mongoose.model("productdetails", ProductSchema);

module.exports = { ProductModel };
