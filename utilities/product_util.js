const Product = require("../Models/product")

// Get All Products
const getAllProducts = function () {
    return Product.find()
}

module.exports = {
    getAllProducts
}