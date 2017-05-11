import React from 'react'
import Presentation from '../src/Presentation.js'
import {shallow} from 'enzyme' // could also mount
import toJson from 'enzyme-to-json'

describe('Presentations', () => {
  it('renders', () => {
    const wrapper = shallow(<Presentation />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  // does this test work?
  it('contains a title', () => {
    const wrapper = shallow(<Presentation title='pres1' />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});
