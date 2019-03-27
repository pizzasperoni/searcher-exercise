const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const meli = require('./meli')

const app = express();


app.get('/api/items/:id', async (req, res) => {
  const id = req.params.id

  let product = await meli.getProduct(id)

  res.status(200).send({
    success: 'true',
    message: 'product returned successfully',
    id: id,
    product: product
  })
})

app.get('/api/items', async (req, res) => {
  const request = req.query
  let productList = []

  if (request.q){
    productList = await meli.getProductList(request.q)
  }
  res.status(200).send({
    success: 'true',
    request: req.query,
    productList: productList
  })
})

//server
app.use(express.static(__dirname + '/client/'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

const port = 8000;

app.listen(port, () => `Server running on port ${port}`); 