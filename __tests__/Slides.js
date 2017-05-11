import React from 'react'
import Slides from '../src/Slides.js'
import {shallow} from 'enzyme' // could also mount
import toJson from 'enzyme-to-json'

describe('Slides', () => {
  it('renders', () => {
    const wrapper = shallow(<Slides type='' />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });



});
