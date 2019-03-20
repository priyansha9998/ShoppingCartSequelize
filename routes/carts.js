const express = require('express')
const { CartItems, Products } = require('../db')

const route = express.Router()

route.get('/', async (req, res) => {
  res.send(await CartItems.findAll({
      include: [Products]
  }))
})

route.post('/', async (req, res) => {

  const newCartitem = await CartItems.create({
    productId: req.body.productId,
    quantity: req.body.quantity
  })
  
  res.send(newCartitem)

})

module.exports = route
