let router = require('express').Router()
let Reviews = require('../models/review')


//USE FOR FINDING ALL REVIEWS WRITTEN BY A USER BY USERID
router.get("/user/:creatorId", (req, res, next) => {
  Reviews.find({ creatorId: req.params.creatorId })
    .then(reviews => res.send(reviews))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Reviews.create(req.body)
    .then(review => res.send(review))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Reviews.findByIdAndDelete(req.params.id)
    .then(review => res.send({ message: "DELORTED", data: review }))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Reviews.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(review => res.send(review))
    .catch(next)
})

module.exports = router