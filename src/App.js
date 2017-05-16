import React, { Component } from 'react';
import './App.css';
import Presentation from './Presentation';
import Navigation from './Navigation';
//import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

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
  }


  updateSlide(index) {
    console.log(this.state.presentation.currentSlideIndex);
    if (this.state.presentation.currentSlideIndex!==0) {
      this.setState({
        presentation:{
          ...this.state.presentation,
          currentSlideIndex:index
        }
      });
    }
    console.log(this.state.presentation.currentSlideIndex);
  }

  updateVisited() {
    const slideToUpdate =
      this.state.presentation.listOfSlides[this.state.presentation.currentSlideIndex];
    slideToUpdate.visited=true;
    this.setState({listOfSlides:this.state.listOfSlides});
  }

  // checkShowButtons() {
  //   const currentSlide = this.state.presentation.currentSlideIndex;
  //   const lastSlide = this.state.presentation.listOfSlides.length;
  //   console.log("last"+lastSlide);
  //   console.log("current"+currentSlide);
  //   if (currentSlide===0) {
  //     this.updateButtonShowValue(false, true);
  //   } else if (currentSlide === lastSlide - 1) {
  //     this.updateButtonShowValue(true, false);
  //   } else {
  //     this.updateButtonShowValue(true, true);
  //   }
  // }

  // updateButtonShowValue(previous, next) {
  //   this.setState({
  //     ...this.state,
  //     showPreviousButton:previous,
  //     showNextButton:next
  //   });
  //   this.updateVisited();
  // }

  // TODO: only move forward or back if valid
  nextSlide() {
    this.updateVisited();
    // this.updateSlide(this.state.presentation.currentSlideIndex)
    this.setState({
      presentation:{
        ...this.state.presentation,
        currentSlideIndex:this.state.presentation.currentSlideIndex+1
      }
    });
  }

  prevSlide() {
    this.updateVisited();
    this.setState({
      presentation:{
        ...this.state.presentation,
        currentSlideIndex:this.state.presentation.currentSlideIndex-1
      }
    });
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
                <Navigation updateSlide={this.updateSlide}
                  updateVisited={this.updateVisited} navData={presentationState}/>
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
