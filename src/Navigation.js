import React, { Component } from 'react';
import './App.css';
//import $ from 'jquery';
//import Presentation from './Presentation';

export default class Navigation extends Component {
  // getPageInfo() {
  //   return $.getJSON('google.com/slide')
  //     .then((data) => {
  //       // how can we get data for individual variables?
  //       // use regex to separate string into different variables?
  //       // assuming format of json is type,title,content
  //       // separated by an uncommon utf char
  //       // '^/w*' matches type (should skip over this)
  //       this.setState({ title:data.results })
  //     });
  // }


  getVisitedValue(item) {
    if (item.visited===true) {
      return (<b>&#9989;</b>);
    } else {
      return (<b className="list-indent"></b>)
    }
  }
  findListed(slideTitles) {
    return(
      <div className="list">
        {slideTitles.map((item, index) =>
          <p key={index}>{this.getVisitedValue(item)} &nbsp; {item.title}</p>)}
      </div>
    );
  }



  render() {
    return(
      <div>
        <h3 className="navigation-title">{this.props.navData.title}</h3>
        <div>
          {this.findListed(this.props.navData.listOfSlides)}
        </div>
      </div>
    );
  }
}
