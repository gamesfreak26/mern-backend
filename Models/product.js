const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Product = new Schema({
    name: String,
    description: String,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Owner' },
    price: { type: Number, default: 0 },
    category: [String],
    currentCondition: { type: Number, default: 0 },
    brand: String
})

module.exports = mongoose.model("Product", Product);