import { 
  FETCH_PRODUCTS,
  SHOW_DETAIL,
  GET_DETAILS,
  SET_PRODUCT_NAME
} from '../actions/types'

const initialState = {
  productName: '',
  products: [],
  isShowingDetails: false
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: 
      return {
        ...state,
        products: action.payload
      }
    case SET_PRODUCT_NAME:
      return {
        ...state,
        productName: action.payload
      }
    case SHOW_DETAIL: 
      return {
        ...state,
        isShowingDetails: action.payload
      }
    case GET_DETAILS:
      return {
        ...state,
        productDetails: action.payload
      }
    default:
      return state
  }
}

export default productsReducer