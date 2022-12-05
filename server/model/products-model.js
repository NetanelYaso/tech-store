const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema({
    ProductName: { type: String},
    ProductType: { type: String, required: true },
    ProductNumber: { type: Number, required: true },
    NumberOfProducts: ({ type: Number, required: true }),
    company: { type: String }
},
    { timestamps: true }
)

module.exports = mongoose.model("products", Product);
