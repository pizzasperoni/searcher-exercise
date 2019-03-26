import { FETCH_PRODUCTS, SET_PRODUCT_NAME } from './types'

const SEARCH_URL = 'https://api.mercadolibre.com/sites/MLA/search?q='

export const fetchProducts = (product) => dispatch => {
  fetch(`${SEARCH_URL}${product}`)
  .then(res => res.json())
  .then(data =>{
    let products = data.results
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products
    })
  })
}

export const setProductName = (productName) => dispatch =>{
  dispatch({
    type: SET_PRODUCT_NAME,
    payload: productName
  })
}