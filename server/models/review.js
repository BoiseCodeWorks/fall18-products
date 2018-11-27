let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Review"

let schema = new Schema({
  description: { type: String },
  stars: { type: Number, required: true, min: 1, max: 5 },
  //these below are foreign keys (these properties have the unique values to identify the correct parentd)
  productId: { type: ObjectId, ref: "Product", required: true },
  //mongoose uses ref to know which table to search
  creatorId: { type: ObjectId, ref: "User", required: true }
})

let model = mongoose.model(name, schema)

module.exports = model