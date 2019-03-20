const express = require('express')
const { db } = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))

const routes = {
  vendors: require('./routes/vendors'),
  products: require('./routes/products'),
  users: require('./routes/users'),
  carts:require('./routes/carts'),
  //catalogue:require('./routes/catalogue')
}

app.use('/vendors', routes.vendors)
app.use('/products', routes.products)
app.use('/users', routes.users)
app.use('/carts', routes.carts)
//app.use('/catalogue', routes.catalogue)

db.sync({ alter: true })
  .then(() => {
    app.listen(9876, () => {
      console.log('Server started on http://localhost:9876')
    })
  })
  .catch(console.error)
