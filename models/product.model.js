const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  sku: String,
  image: String,
  subImages: [String],
  brand: String,
  brandLogo: String,
  name: String,
  desc: String,
  category: String,
  rate: Number,
  totalRates: Number,
  price: Number,
  oldPrice: Number,
  discount: String,
  sizes: [String],
  colors: [String],
  similarProducts: [
    {
      name: String,
      image: String,
      brandLogo: String,
      rate: Number,
      price: Number,
      oldPrice: Number,
      discount: String,
      pickupFrom: String,
    },
  ],
});

module.exports = mongoose.model("product", productSchema);
