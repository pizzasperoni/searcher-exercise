import { SHOW_DETAIL, GET_DETAILS, GET_DESCRIPTION } from './types'

const DESCRIPTION_URL = 'https://api.mercadolibre.com/items/:id/description'
const PRODUCT_URL = 'https://api.mercadolibre.com/items/:id'

export const showDetails = isShowingDetails => dispatch => {
  isShowingDetails = !isShowingDetails
  dispatch({
    type: SHOW_DETAIL,
    payload: isShowingDetails
  })
}

export const getProductDetails = (product) => dispatch => {
  let url = PRODUCT_URL.replace(':id', product.id)
  let productDetails = {}
  fetch(url)
    .then(res => res.json())
    .then(data => {
      productDetails = data
      dispatch({
        type: GET_DETAILS,
        payload: productDetails
      })
    })

}

export const getDescription = (product) => dispatch => {
  let url = DESCRIPTION_URL.replace(':id', product.id)
  let productDescription = ''

  fetch(url)
    .then(res => res.json())
    .then(data=> {
      productDescription = data.plain_text
      dispatch({
        type: GET_DESCRIPTION,
        payload: productDescription
      })
    })
}