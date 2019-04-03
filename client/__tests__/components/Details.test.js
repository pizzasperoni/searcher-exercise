import React from 'react'
import Details from '../../src/components/details/Details'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import data from '../../__mocks__/details.json'

Enzyme.configure({ adapter: new Adapter() })

describe('Adding unit testing to details component', () => {
  test('Testing props received', ()=> {
    const wrapper = shallow (
      <Details details={data} />
    )
    const h4 = wrapper.find('h4')
    const h1 = wrapper.find('h1')
    expect(h4.text()).toBe('Nuevo - 20 vendidos')
    expect(h1.text()).toBe('$ARS 20')
  })
})