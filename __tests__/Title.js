import React from 'react'
import Title, {add} from '../src/Title.js'
import {shallow} from 'enzyme' // could also mount
import toJson from 'enzyme-to-json'

describe('Title', () => {
  it('renders', () => {
    const wrapper = shallow(<Title title='' type='' contents={[]} nextClick={jest.fn()} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('adds two numbers', () => {
    const sum = add(2,2)
    expect(sum).toEqual(4)
  });
  it('responds to next click', () =>{
    const nextListener = jest.fn()
    const wrapper = shallow(<Title title='' type='' contents={[]} nextClick={nextListener} />)
    wrapper.find('.Next-Button').simulate('click') // also could do event ex. target, value
    expect(nextListener).toHaveBeenCalled()
  });

});
