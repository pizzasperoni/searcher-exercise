const express = require('express')
const path = require('path')

const meli = require('./meli')

const app = express();

const author = {
  name: "Diego",
  lastname: "Speroni"
}

const categories = ["Electronica, Audio y video", "Ipod", "Reproductores", "Ipod touch", "32GB"]


/*
  -endpoint to get a specific product
  -params: product id
  -returns: an object with product details such as description
*/
app.get('/api/items/:id', async (req, res) => {
  const idParam = req.params.id
  let description = ''
  let price = {}
  
  let product = await meli.getProduct(idParam)

  if (product) {
    description = await meli.getDescription(idParam)
    price = meli.getDecimals(product.price)
    price.currency = product.currency_id
  }

  let { 
    id , 
    title, 
    pictures, 
    condition, 
    free_shipping, 
    sold_quantity  
  } = product

  let fitleredProduct = { 
    author : author,
    item: {
      id , 
      title,
      price, 
      pictures, 
      condition, 
      free_shipping, 
      sold_quantity,
      categories,
      description: description
    }
  }

  res.status(200).send({
    // success: 'true',
    // message: 'product returned successfully',
    product: fitleredProduct
  })
})

/*
  -endpoint to get a list of products
  -params: product name
  -returns: array of the first 4 products
*/
app.get('/api/items', async (req, res) => {
  const request = req.query
  let productList = []

  if (request.q){
    productList = await meli.getProductList(request.q)
  }

  productListFixed = productList.map((item)=>{
    let priceFixed = meli.getDecimals(item.price)
    priceFixed.currency = item.currency_id
    return {
      ...item,
      price: priceFixed
    }
  })

  let productsToShow = {
    author : author,
    categories: categories,
    items: productListFixed.slice(0, 4)
  }

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