import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import data from '../../__mocks__/listElement.json'
import ListElement from '../../src/components/table/ListElement';

Enzyme.configure({ adapter: new Adapter() })

describe('Adding unit testing to list element component', () => {
  test('Testing props received', ()=> {
    const wrapper = mount (
      <ListElement 
        showDetails={(()=>{})}
        shipping={data.shipping}
        id={data.id}
        thumbnail={data.thumbnail}
        amount={data.amount}
        decimals={data.decimals}
        currency={data.currency}
        title={data.title}
        state={data.state}
      />
    )
     const h2 = wrapper.find('h2')
    expect(h2.text()).toBe('$ARS 20')
  })
})