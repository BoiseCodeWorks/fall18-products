let router = require('express').Router()
let Wishlists = require('../models/wishlist')
let Users = require('../models/user')


//get wishlist by id
router.get('/:id', (req, res, next) => {
  Wishlists.findById(req.params.id)
    .then(wishlist => res.send(wishlist))
    .catch(next)
})

///post/create a new wishlist
router.post('/', (req, res, next) => {
  Wishlists.create(req.body)
    .then(wishlist => {
      Users.findOneAndUpdate({ _id: req.session.uid }, { wishlist: wishlist._id })
        .then(user => {
          res.send(wishlist)
        })
    })
    .catch(next)
})

//delete a wishlist
router.delete('/:id', (req, res, next) => {
  //Validates is creator before deleting
  Wishlists.deleteOne({ _id: req.params.id, creatorId: req.session.uid })
    .then(wishlist => {
      Users.findOneAndUpdate({ _id: req.session.uid }, { wishlist: undefined })
        .then(user => {
          res.send({ message: "DELORTED", data: wishlist })
        })
    })
    .catch(next)
})

//update/modify an existing wishlist
router.put('/:id', (req, res, next) => {
  //Validates is creator before updating
  Wishlists.findOneAndUpdate({ _id: req.params.id, creatorId: req.session.uid }, { new: true })
    .then(wishlist => res.send(wishlist))
    .catch(next)
})


// How you might allow for a non creator to edit
// router.put('/:id/purchased', (req, res, next) => {
//   let purchased = req.body.purchased
//   Wishlists.updateOne({_id: req.params.id}, {purchased}, { new: true })
//     .then(wishlist => res.send(wishlist))
//     .catch(next)
// })

module.exports = router