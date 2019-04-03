import React from 'react'
import Spinner from '../../src/components/loading/Spinner'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Adding unit testing to details component', () => {
  test('Testing props received', ()=> {
    const wrapper = shallow (
      <Spinner  />
    )
    const div = wrapper.find('div')
    expect((div).hasClass('sweet-loading')).toBe(true)
  })
})