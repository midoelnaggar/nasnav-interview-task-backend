const express = require("express");
const infoProduct = require("../controllers/product/infoProduct.controller");

const router = express.Router();

router.route("/product").get(infoProduct);

module.exports = router;