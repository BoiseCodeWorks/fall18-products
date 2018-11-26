let mongoose = require('mongoose')
let Schema = mongoose.Schema
let name = "Product"

let schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String },
  type: { type: String, enum: ["Book", "Video", "Food", "General"], default: "General" },
  //creatorId: { type: ObjectId, ref: "User", required: true } MARK TALK ABOUT ME!!!! :)
})

let model = mongoose.model(name, schema)

module.exports = model