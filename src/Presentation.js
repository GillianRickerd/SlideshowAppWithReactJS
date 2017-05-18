import React from 'react';
import './index.css';
import Slides from './Slides'

//import App from './App'
//import $ from 'jquery';

export default class Presentation extends React.Component {
  // getTitleFromAPI() {
  //   return $.getJSON('google.com/pres')
  //     .then((data) => {
  //       this.setState({ this.props.title:data.results })
  //     });
  // }

  // should the url be passed into this method?
  // getListOfSlides() {
  //   let i = 0;
  //   return $.getJSON('google.com/slide/#')
  //     .then((data) => {
  //       // this condition needs to be redone
  //       for (i = 0; i < this.state.listOfSlides.length; i++) {
  //         // need to get individual portion of string
  //         this.setState({ this.props.listOfSlides:data.results })
  //       }
  //     });
  // }

  render() {
    console.log(this.props.presData.listOfSlides);
    console.log("current index "+this.props.currentSlideIndex);
    const slide = this.props.presData.listOfSlides[this.props.currentSlideIndex];
    return (<Slides slideData={slide} />);
  }
}
