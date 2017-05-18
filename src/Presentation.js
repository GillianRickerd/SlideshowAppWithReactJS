import React, {Component} from 'react';
import './index.css';
import Slides from './Slides'

export default class Presentation extends Component {
  render() {
    const slide = this.props.presData.listOfSlides[this.props.currentSlideIndex];
    return (<Slides slideData={slide} />);
  }
}
