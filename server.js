const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const meli = require('./meli')

const app = express();


app.get('/api/items/:id', async (req, res) => {
  const idParam = req.params.id
  let description = ''

  let product = await meli.getProduct(idParam)

  if (product) {
    description = await meli.getDescription(idParam)
  }

  let { 
    id , 
    price, 
    title, 
    pictures, 
    condition, 
    free_shipping, 
    sold_quantity  
  } = product

  let fitleredProduct = { 
    id , 
    price, 
    title, 
    pictures, 
    condition, 
    free_shipping, 
    sold_quantity  
  }

  fitleredProduct.description = description

  res.status(200).send({
    // success: 'true',
    // message: 'product returned successfully',
    product: fitleredProduct
  })
})

app.get('/api/items', async (req, res) => {
  const request = req.query
  let productList = []

  if (request.q){
    productList = await meli.getProductList(request.q)
  }

  let productsToShow = productList.slice(0, 4)

  res.status(200).send({
    productList: productsToShow
  })
})

//server
app.use(express.static(__dirname + '/client/'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

const port = 8000;

app.listen(port, () => `Server running on port ${port}`); 