import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DetailsContainer from '../../src/containers/Details/DetailsContainer'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    getProductDetails: jest.fn(),
    showDetails: jest.fn()
  }

  const enzymeWrapper = shallow(<DetailsContainer {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Containers', () => {
  describe('Details container ', () => {
    test('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('div.container').children()).to.have.lengthOf(1)
    })
  })
})