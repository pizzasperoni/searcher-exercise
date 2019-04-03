import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SingleInput from '../../src/components/form/SingleInput'


Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    handleSubmit: jest.fn(),
    handleInput: jest.fn()
  }

  const enzymeWrapper = shallow(<SingleInput {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Single input', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('input').parent().is('form')).toBe(true)
      expect(enzymeWrapper.find('form').hasClass('form-control')).toBe(true)
    })
  })
})