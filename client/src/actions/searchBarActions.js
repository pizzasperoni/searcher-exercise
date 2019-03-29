import { FETCH_PRODUCTS, SET_PRODUCT_NAME, CLEAR_STATE } from './types'

const SEARCH_URL = 'http://localhost:8000/api/items'

export const fetchProducts = (product) => dispatch => {
  fetch(`${SEARCH_URL}?q=${product}`)
  .then(res => res.json())
  .then(data =>{
    let products = data.productList
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products
    })
  })
}

export const clearState = () => dispatch => {
  dispatch({
    type: CLEAR_STATE,
    payload: undefined
  })
}

export const setProductName = (productName) => dispatch =>{
  dispatch({
    type: SET_PRODUCT_NAME,
    payload: productName
  })
}