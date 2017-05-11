import React from 'react';
import './index.css';
import Slides from './Slides'
import $ from 'jquery';

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.state = {
      title:'cool presentation',
      listOfSlides:[],
    };
  }

  getTitleFromAPI() {
    return $.getJSON('google.com/pres')
      .then((data) => {
        this.setState({ title:data.results })
      });
  }

  // should the url be passed into this method?
  getListOfSlides() {
    let i = 0;
    return $.getJSON('google.com/slide/#')
      .then((data) => {
        // this condition needs to be redone
        for (i = 0; i < this.state.listOfSlides.length; i++) {
          // need to get individual portion of string
          this.setState({ listOfSlides:data.results })
        }
      });
  }

  render() {
    return (<Slides />);
  }
}
