import React from 'react'
import Categories from '../../src/components/table/Categories';

import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import data from '../../__mocks__/categories.json'

Enzyme.configure({ adapter: new Adapter() })

describe('Adding unit testing to Categories component', () => {
  test('Testing props received', ()=> {
    const wrapper = shallow (
      <Categories categories={data} />
    )
    const li = wrapper.find('li')
    li.map((item, index)=>{
      expect(item.text()).toBe(`category ${index}  > `)
    })
  })
})

