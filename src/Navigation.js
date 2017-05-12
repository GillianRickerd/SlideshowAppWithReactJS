import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
//import Presentation from './Presentation';

export default class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      title: 'presentation title',
      slideTitles: ['slide1', 'slide2', 'slide3'],
      slideVisited: [true, false, false],
    };
  }

  getPageInfo() {
    return $.getJSON('google.com/slide')
      .then((data) => {
        // how can we get data for individual variables?
        // use regex to separate string into different variables?
        // assuming format of json is type,title,content
        // separated by an uncommon utf char
        // '^/w*' matches type (should skip over this)
        this.setState({ title:data.results })
      });
  }

  findListed(slideTitles) {
    return(
      <ul>
        {slideTitles.map((item, index) => <p key={index}>{item.title}</p>)}
      </ul>
    );
  }

  findVisited(slideTitles) {
    return(
      <ul>
        {slideTitles.map((item, index) => <p key={index}>{item.visited}</p>)}
      </ul>
    );
  }

  render() {
    return(
      <div>
        <h3>{this.props.navData.title}</h3>
        <p>
          {this.findVisited(this.props.navData.listOfSlides)}
          {this.findListed(this.props.navData.listOfSlides)}
        </p>
      </div>
    );
  }
}
