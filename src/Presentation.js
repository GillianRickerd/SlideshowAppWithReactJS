import React from 'react';
import './index.css';
import Slides from './slides'

export default class Presentations extends React.Component {
  constructor() {
    super();
    this.state = {
      title:'',
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
        for (i = 0; i < listOfSlides.length; i++) {
          // need to get individual portion of string
          this.setState({ listOfSlides:data.results })
        }
      });
  }

  render() {
    return (<Slides />);
  }
}
