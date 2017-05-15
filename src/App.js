import React, { Component } from 'react';
import './App.css';
//import Slides from './Slides';
import Presentation from './Presentation';
import Navigation from './Navigation';
import showHide from './buttons';


//import buttons from './buttons';
//import {nextSlide} from './actions/slideactions';
//import TitleSlide from './TitleSlide';

class App extends Component {
  constructor() {
    super();
    this.state = {
      presentation: {
        title: 'cool presentation',
        listOfSlides: [
          {type:'title',
            title:'title slide',
            content:[],
            visited:false},
          {type:'simple',
            title:'simple slide',
            content:['panda', 'puppy', 'kitten'],
            visited:false},
          {type:'twocolumn',
            title:'column slide',
            content:['gillian', 'jacob', 'charlotte'],
            content2:['amy', 'kevin', 'julia'],
            visited:false}],
        currentSlideIndex: 0,
      },
      showPreviousButton: false,
      showNextButton: true
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.updateSlide = this.updateSlide.bind(this);
    this.handler = this.handler.bind(this);
  }

  handler(index) {
    this.setState({
      presentation:{
        ...this.state.presentation,
        currentSlideIndex:index
      }
    });
  }
  updateSlide(index) {
    this.setState({
      presentation:{
        ...this.state.presentation,
        currentSlideIndex:index
      }
    });
  }

  checkShowButtons() {
    const currentSlide = this.state.presentation.currentSlideIndex;
    const lastSlide = this.state.presentation.listOfSlides.length;
    console.log("last"+lastSlide);
    console.log("current"+currentSlide);
    if (currentSlide===0) {
      this.updateButtonShowValue(false, true);
    } else if (currentSlide === lastSlide - 1) {
      this.updateButtonShowValue(true, false);
    } else {
      this.updateButtonShowValue(true, true);
    }
  }

  updateButtonShowValue(previous, next) {
    this.setState({
      ...this.state,
      showPreviousButton:previous,
      showNextButton:next
    });
  }

  // TODO: only move forward or back if valid
  nextSlide() {
    // this.updateVisited();
    //this.checkShowButtons();
    //const currentSlide = this.state.presentation.currentSlideIndex;
    //const lastSlideIndex = this.state.presentation.listOfSlides.length - 1;
    // if (currentSlide===lastSlideIndex) {
    //   this.updateButtonShowValue(true, false);
    //   //document.getElementById(next).style.display = 'none';
    // } else {
      this.updateVisited();
      this.setState({
        presentation:{
          ...this.state.presentation,
          currentSlideIndex:this.state.presentation.currentSlideIndex+1
        }
      });
    //}
  }

  prevSlide() {
    //this.checkShowButtons();
    this.setState({
      presentation:{
        ...this.state.presentation,
        currentSlideIndex:this.state.presentation.currentSlideIndex-1
      }
    });
  }

  updateVisited() {
    const slideToUpdate =
      this.state.presentation.listOfSlides[this.state.presentation.currentSlideIndex];
    slideToUpdate.visited=true;
    this.setState({listOfSlides:this.state.listOfSlides});
  }

  render() {
    const presentationState = this.state.presentation;
    //const { onIncrement, onDecrement } = this.props;
    return (
      <div className="page">
        <table>
          <tbody>
            <tr>
              <td className="navigation">
                <Navigation navData={presentationState}/>
              </td>
              <td className="slides">
                <div className="slideDiv">
                  <Presentation presData={presentationState}/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div /*onClick={this.nextSlide}*/>
          <showHide />
          <button className="Next-Button"
            onClick={this.nextSlide}>NEXT</button>
          <button className="Prev-Button"
            onClick={this.prevSlide}>PREV</button>
        </div>
      </div>
    );
  }

}

export default App;

// {
//   this.state.showNextButton
//     ? <buttons onClick={this.nextSlide} />
//     : null
// }
//
// <button className="Next-Button"
//   onClick={this.nextSlide}>NEXT</button>
// <button className="Prev-Button"
//   onClick={this.prevSlide}>PREV</button>
