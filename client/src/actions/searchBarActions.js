import { FETCH_PRODUCTS, SET_PRODUCT_NAME, CLEAR_STATE, SET_CATEGORIES } from './types'

const SEARCH_URL = 'http://localhost:8000/api/items'

export const fetchProducts = (product) => async dispatch => {
  let url = `${SEARCH_URL}?q=${product}`
  let products = {}
  let res, data
  try {
    res = await fetch(url)
    data = await res.json()
    products = data.productList

    dispatch({
      type: FETCH_PRODUCTS,
      payload: products.items
    })
    dispatch({
      type: SET_CATEGORIES,
      payload: products.categories
    })
  }catch(err){
    console.log("Error en el servicio", err)
  }
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