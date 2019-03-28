import { SHOW_DETAIL, GET_DETAILS,  } from './types'

const PRODUCT_URL = 'http://localhost:8000/api/items/'

export const showDetails = isShowingDetails => dispatch => {
  isShowingDetails = !isShowingDetails
  dispatch({
    type: SHOW_DETAIL,
    payload: isShowingDetails
  })
}

export const getProductDetails = (product) => dispatch => {
  let url = `${PRODUCT_URL}${product.id}`
  let productDetails = {}
  fetch(url)
  .then(res => res.json())
  .then(data => {
    productDetails = data.product
    dispatch({
      type: GET_DETAILS,
      payload: productDetails
    })
  })
}
