import * as actions from '../../src/actions/listActions'
import * as types   from '../../src/actions/types'

import fetchMock    from 'fetch-mock'
import thunk from 'redux-thunk'

import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore();

describe('List Actions', () => {
  beforeEach(() => { 
    store.clearActions()
  })
  test('Dispatchs the correct action and payload ', () => {
    const expectedAction = [{
      'payload': false,
      'type': types.SHOW_DETAIL
    }]

    store.dispatch(actions.showDetails(true))
    expect(store.getActions()).toEqual(expectedAction)
  })

  test('Receives product details from the api', () => {
    const id = "MLA756199020"
    fetchMock.config.warnOnFallback = false
    fetchMock.getOnce('/api/items', {
      body: {},
      headers: { 'Content-type': 'application/json' }
    })
    fetchMock.catch((err)=>err)

    const expectedAction = [{
      'type': types.GET_DETAILS,
      'payload': {}
    }]

    store.dispatch(actions.getProductDetails(id)).then(()=> {
      expect(store.getActions()).toEqual([])
    }).catch((err)=>err)

  })

})