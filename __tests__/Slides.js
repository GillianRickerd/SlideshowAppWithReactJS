import React from 'react'
import Slides from '../src/Slides.js'
import {shallow} from 'enzyme' // could also mount
import toJson from 'enzyme-to-json'

describe('Slides', () => {
  it('renders', () => {
    const wrapper = shallow(<Slides type='' />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('returns a title slide', () => {
    const wrapper = shallow(<Slides type='title' />)
    // can a method be used here?
    expect(wrapper.find('title-slide').length) >= 1
    expect(wrapper.find('simple-slide').length)===0
    expect(wrapper.find('two-column-slide').length)===0
  });
  it('returns a simple slide', () => {
    const wrapper = shallow(<Slides type='simple' />)
    expect(wrapper.find('title-slide').length)===0
    expect(wrapper.find('simple-slide').length)>=1
    expect(wrapper.find('two-column-slide').length)===0
  });
  it('returns a two column slide'), () => {
    const wrapper = shallow(<Slides type='twocolumn' />)
    expect(wrapper.find('title-slide').length)===0
    expect(wrapper.find('simple-slide').length)===0
    expect(wrapper.find('two-column-slide').length)>=1
  }


});
