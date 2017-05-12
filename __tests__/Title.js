import React from 'react'
import Title from '../src/Title.js'
import {shallow} from 'enzyme' // could also mount
import toJson from 'enzyme-to-json'

describe('Title', () => {
  it('renders', () => {
    const wrapper = shallow(<Title title='' type='' contents={[]} nextClick={jest.fn()} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('responds to next click', () => {
    const nextListener = jest.fn()
    const wrapper = shallow(<Title title='' type='' contents={[]} nextClick={nextListener} />)
    wrapper.find('.Next-Button').simulate('click') // also could do event ex. target, value
    expect(nextListener).toHaveBeenCalled()
  });
  it('responds to previous click', () => {
    const prevListener = jest.fn()
    const wrapper = shallow(<Title title='' type='' contents={[]} prevClick={prevListener} />)
    wrapper.find('.Prev-Button').simulate('click') // also could do event ex. target, value
    expect(prevListener).toHaveBeenCalled()
  });
  it('checks title', () => {
    const wrapper = shallow(<Title title='cool title' type='' contents={[]} />)
    wrapper.find('h1')
    expect(wrapper).toContain('cool title')
  });

});
