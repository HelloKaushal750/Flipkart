const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  category: String,
  name: String,
  current_price: Number,
  original_price: Number,
  discounted: Boolean,
  discount_percent: Number,
  rating: Number,
  in_stock: Boolean,
  share_url: String,
  seller: Object,
  thumbnails: Array,
  highlights: Array,
  offers: Array,
  specs: Array,
  quantity:{type:Number,required:true,default:1},
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "productdetails",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const CartModel = mongoose.model("cartitems", CartSchema);

module.exports = { CartModel };
