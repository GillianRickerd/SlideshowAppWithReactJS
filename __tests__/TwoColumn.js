import React from 'react'
import TwoColumn from '../src/TwoColumn.js'
import {shallow} from 'enzyme' // could also mount
import toJson from 'enzyme-to-json'
import * as ShallowTestUtils from 'react-shallow-testutils';

describe('TwoColumn', () => {
  it('renders', () => {
    const wrapper = shallow(<TwoColumn title='' type='' contents={[]} contents2={[]} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  // it('has two columns', () => {
  //   // how to properly test for two columns
  //   const list1 = ['hello', 'bonjour']
  //   const list2 = ['goodbye', 'ciao']
  //   const view = ShallowTestUtils.renderIntoDocument(<TwoColumn />)
  //   const resultFromCol1 = view.makeColumn1(list1)
  //   const resultFromCol2 = view.makeColumn2(list2)
  //   const wrapper = shallow(<TwoColumn title='' type='' contents={[]} contents2={[]} />)
  //   expect(wrapper.find('li').length) >= 1
  // });
});
