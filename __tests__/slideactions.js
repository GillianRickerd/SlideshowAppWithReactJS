import React from 'react'
import {clickTitle, nextSlide} from '../src/actions/slideactions'

describe('slideactions', () => {
  it('generates clickTitle action', () => {
    test = clickTitle('cool title')
    expect(test).toEqual({type:'CLICK_TITLE', payload: 'cool title'})
  })
})
describe('next slide', () => {
  it('goes to the next slide', () => {
    test = nextSlide(0)
    expect(test).toEqual({type:'NEXT_SLIDE', payload: 1})
  })
})
