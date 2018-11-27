let router = require('express').Router()
let Products = require('../models/product')
let Reviews = require('../models/review')

//GET
router.get('/', (req, res, next) => {
  Products.find({})
    .then(products => res.send(products))
    .catch(next)
})

//get product by id
router.get('/:id', (req, res, next) => {
  Products.findById(req.params.id)
    .then(product => res.send(product))
    .catch(next)
})

//get product and its reviews
router.get('/:id/reviews', (req, res, next) => {
  Products.findById(req.params.id)
    .then(product => {
      Reviews.find({ productId: product._id })
        .then(reviews => {
          return res.send({ product, reviews })
        })
    })
    .catch(next)
})

//post/create a new product
router.post('/', (req, res, next) => {
  Products.create(req.body)
    .then(product => res.send(product))
    .catch(next)
})

//delete a product
router.delete('/:id', (req, res, next) => {
  Products.findByIdAndDelete(req.params.id)
    .then(product => res.send({ message: "DELORTED", data: product }))
    .catch(next)
})

//update/modify an existing product
router.put('/:id', (req, res, next) => {
  Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(product => res.send(product))
    .catch(next)
})

module.exports = router