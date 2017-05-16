import React, { Component } from 'react';
import './App.css';
//import Slides from './Slides';
//import {updateVisited} from './App';

//import $ from 'jquery';
//import Presentation from './Presentation';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navData: {
        title: '',
        listOfSlides: [],
        currentSlideIndex: 0,
      }
    };
    //this.updateSlide = this.updateSlide.bind(this);
  }

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
          <p key={index}>{this.getVisitedValue(item)} &nbsp;
            <a onClick={() => this.props.updateSlide(index)} href="#">{item.title}</a></p>)}

      </div>
    );
  }

  // getSlideData() {
  //   const slide = this.props.navData.listOfSlides[this.props.navData.currentSlideIndex];
  //   return slide;
  // }

  // updateSlide(index) {
  //     // const slide = this.state.navData.currentSlideIndex;
  //     //contacts.push(index);
  //     // console.log(this.state.navData.currentSlideIndex);
  //     console.log(this.state.navData.currentSlideIndex);
  //     this.props.updateVisited();
  //     // this.setState({listOfSlides:this.state.listOfSlides});
  //     this.setState({
  //       navData:{
  //         ...this.state.navData,
  //         currentSlideIndex: index
  //       }
  //     });
  //
  // }

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
