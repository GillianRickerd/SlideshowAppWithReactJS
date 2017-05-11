import React from 'react'
import Navigation from '../src/Navigation.js'
import {shallow} from 'enzyme' // could also mount
import toJson from 'enzyme-to-json'

describe('Navigation', () => {
  it('renders', () => {
    const wrapper = shallow(<Navigation />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});
