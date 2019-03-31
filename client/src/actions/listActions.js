import { SHOW_DETAIL, GET_DETAILS } from './types'

const PRODUCT_URL = 'http://localhost:8000/api/items/'

export const showDetails = isShowingDetails => dispatch => {
  isShowingDetails = !isShowingDetails
  dispatch({
    type: SHOW_DETAIL,
    payload: isShowingDetails
  })
}

export const getProductDetails =  (id) => async dispatch => {
  let url = `${PRODUCT_URL}${id}`
  let productDetails = {}

  let res = await fetch(url)
  let data = await res.json()
  console.log('action', data)
  productDetails = data.product

  dispatch({
    type: GET_DETAILS,
    payload: productDetails.item
  })
}
