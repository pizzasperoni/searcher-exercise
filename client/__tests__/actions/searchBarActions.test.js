import * as actions from '../../src/actions/searchBarActions'
import * as types   from '../../src/actions/types'

import fetchMock    from 'fetch-mock'
import thunk from 'redux-thunk'

import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore();

describe('searchBar Actions', () => {
  beforeEach(() => { 
    store.clearActions()
  })
  test('Set product name ', () => {
    const text = 'product'
    const expectedAction = [{
      payload: text,
      type: types.SET_PRODUCT_NAME
    }]

    store.dispatch(actions.setProductName(text))
    expect(store.getActions()).toEqual(expectedAction)
  })

  test('Testing clear state', () => {
    const expectedAction = [{
      payload: undefined,
      type: types.CLEAR_STATE
    }]
    store.dispatch(actions.clearState())
    expect(store.getActions()).toEqual(expectedAction)
  })

  test('fetch products from api given product name' , ()=> {
    const product = 'iphone'

    // fetchMock.config.fallbackToNetwork = false
    fetchMock.config.warnOnFallback = false
    fetchMock.getOnce('/api/items', {
      body: {
        items: []
      },
      headers: { 'Content-type': 'application/json' }
    })
    fetchMock.catch((err)=> err)
    const expectedActions = [{
        type: types.FETCH_PRODUCTS,
        payload: {}
      },
      {
        type: types.SET_CATEGORIES,
        payload: 'some description'
      }
    ]

    const expectedActionsOnError = []

    store.dispatch(actions.fetchProducts(product)).then(()=>{
      expect(store.getActions()).catch().toEqual(expectedActionsOnError)
    }).catch((err) => err)
  })
})