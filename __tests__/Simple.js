import React from 'react'
import Simple from '../src/Simple.js'
import {shallow} from 'enzyme' // could also mount
import toJson from 'enzyme-to-json'

describe('Simple', () => {
  it('renders', () => {
    const wrapper = shallow(<Simple title='' type='' contents={[]} nextClick={jest.fn()} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('responds to next click', () => {
    const nextListener = jest.fn()
    const wrapper = shallow(<Simple title='' type='' contents={[]} nextClick={nextListener} />)
    wrapper.find('.Next-Button').simulate('click') // also could do event ex. target, value
    expect(nextListener).toHaveBeenCalled()
  });
  it('responds to previous click', () => {
    const prevListener = jest.fn()
    const wrapper = shallow(<Simple title='' type='' contents={[]} prevClick={prevListener} />)
    wrapper.find('.Prev-Button').simulate('click') // also could do event ex. target, value
    expect(prevListener).toHaveBeenCalled()
  });
  it('checks title', () => {
    const wrapper = shallow(<Simple title='cool title' type='' contents={['hello', 'bonjour']} />)
    wrapper.find('h1')
    expect(toJson(wrapper))==='cool title'
  });
  it('list method renders', () => {
    const contentList = ['hello', 'bonjour']
    const wrapper = shallow(<Simple title='cool title' type='' contents={contentList} />)
    expect(toJson(wrapper))==='hello'
    expect(wrapper.find('ol').length) >= 1
  });

});
