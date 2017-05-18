import React, { Component } from 'react';
import './App.css';
import Presentation from './Presentation';
import Navigation from './Navigation';
//import Request from 'superagent';
//import Home from './Home';
//import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends Component {
  constructor() {
    super();
    this.state = {
      presentation: {},
      currentSlideIndex:0,
      showPreviousButton: false,
      showNextButton: true
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.updateSlide = this.updateSlide.bind(this);
  }

  updateSlide(index) {
    const nextValueTemp = this.showNextButton(index);
    const prevValueTemp = this.showPrevButton(index);
    this.props.updateSlideIndex(index);
    this.setState({
      ...this.state,
      showPreviousButton:prevValueTemp,
      showNextButton:nextValueTemp
    });
  }

  updateVisited() {
    // const slideToUpdate = this.props.presentation.listOfSlides[this.props.currentSlideIndex];
    // slideToUpdate.visited=true;

    //this.setState({listOfSlides:this.props.presentation.listOfSlides});

    this.props.updateVisited();
  }

  showNextButton(nextSlide) {
    console.log("presentation "+this.props.presentation);
    console.log("list of slides "+this.props.presentation.listOfSlides);
    console.log("length "+this.props.presentation.listOfSlides.length);
    const lastSlide = this.props.presentation.listOfSlides.length-1;
    if (nextSlide>=lastSlide) {
      return false;
    } else {
      return true;
    }
  }

  showPrevButton(nextSlide) {
    if (nextSlide===0) {
      return false;
    } else {
      return true;
    }
  }

  nextSlide() {
    const nextSlide = this.props.currentSlideIndex+1;
    this.props.updateVisited();
    const nextValueTemp = this.showNextButton(nextSlide);
    const prevValueTemp = this.showPrevButton(nextSlide);
    this.props.updateSlideIndex(nextSlide);
    this.setState({
      ...this.state,
      showPreviousButton:prevValueTemp,
      showNextButton:nextValueTemp
    });
  }

  prevSlide() {
    const nextSlide = this.props.currentSlideIndex-1;
    this.props.updateVisited();
    console.log("prev clicked and current is " + this.props.currentSlideIndex);
    console.log("prev clicked and next is " + nextSlide);
    const nextValueTemp = this.showNextButton(nextSlide);
    const prevValueTemp = this.showPrevButton(nextSlide);
    this.props.updateSlideIndex(nextSlide);
    this.setState({
      ...this.state,
      showPreviousButton:prevValueTemp,
      showNextButton:nextValueTemp
    });
  }

  render() {
    const presentationState = this.props.presentation;
    return (
      <div className="page">
        <table>
          <tbody>
            <tr>
              <td className="navigation">
                <Navigation
                  updateSlide={this.updateSlide}

                  currentSlideIndex={this.props.currentSlideIndex}
                  navData={presentationState}/>
              </td>
              <td className="slides">
                <div className="slideDiv">
                  <Presentation
                    presData={presentationState}
                    currentSlideIndex={this.props.currentSlideIndex} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          {this.state.showNextButton ? <button className="Next-Button"
            onClick={this.nextSlide}>NEXT</button> : null}
          {this.state.showPreviousButton ? <button className="Prev-Button"
            onClick={this.prevSlide}>PREV</button> : null}
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
