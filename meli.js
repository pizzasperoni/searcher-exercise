const axios = require('axios')


const DESCRIPTION_URL = 'https://api.mercadolibre.com/items/:id/description'
const PRODUCT_URL = 'https://api.mercadolibre.com/items/:id'
const SEARCH_URL = 'https://api.mercadolibre.com/sites/MLA/search?q='


module.exports = {
  getProduct: async function(id) {
    const url = PRODUCT_URL.replace(':id', id)
    let res = await axios.get(url)
    return res.data
  },

  getDescription: async function (id) {
    const url = DESCRIPTION_URL.replace(':id', id)
    let res = await axios.get(url)
    return res.data.plain_text
  },

  getProductList: async function(product) {
    const url = SEARCH_URL+product
    let list = await axios.get(url)
    return list.data.results
  }

}


