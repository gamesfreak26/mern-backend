const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Owner = new Schema({
    firstName: String,
    lastName: String,
    email: String
})
