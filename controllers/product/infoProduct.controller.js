const asyncHandler = require("express-async-handler");
const Product = require("../../models/product.model");

const infoProduct = asyncHandler(async (req, res) => {
  const { sku } = req.query;
  const product = await Product.findOne({ sku }).exec();
  res.json(await product);
});

module.exports = infoProduct;
