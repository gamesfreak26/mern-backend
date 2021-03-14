const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Product = new Schema({
    name: String,
    description: String,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Owner' },
    price: { type: Number, default: 0 },
    category: { type: String, enum: ['Mobility', 'Hygiene', 'Apparel', 'Bedroom', 'Dining'], required: true },
    currentCondition: { type: String, enum: ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'], required: true },
    brand: String,
    mainImage: String
})

module.exports = mongoose.model("Product", Product);