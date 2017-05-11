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

  findListed() {
    // how to return each item in the list
    for(var i = 0; i < this.state.slideTitles.length; i++) {
      if (this.state.slideVisited[i]) {
        return (<p>&#9989;&nbsp;{this.state.slideTitles[i]}</p>);
      } else {
        return (<p>{this.state.slideTitles[i]}</p>);
      }
    }
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

  render() {
    return(
      <div>
        <h3>presentation title</h3>
        <ul>

          {this.findListed()}
        </ul>
      </div>
    );
  }
}
