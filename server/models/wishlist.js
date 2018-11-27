let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = 'Wishlist'

let schema = new Schema({
  creatorId: { type: ObjectId, ref: 'User', required: true },
  products: [{ type: ObjectId, ref: 'Product' }]
})

let model = mongoose.model(name, schema)

module.exports = model