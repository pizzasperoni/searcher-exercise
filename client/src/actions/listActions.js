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
  let res, data
  try {
    res = await fetch(url)
    data = await res.json()

    productDetails = data.product
    dispatch({
      type: GET_DETAILS,
      payload: productDetails.item
    })
  }catch (err) {
    console.log("Error en el servicio", err)
  }
}
