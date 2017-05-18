import React, { Component } from 'react';
import './App.css';
import Presentation from './Presentation';
import Navigation from './Navigation';
//import Home from './Home';
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
    const nextValueTemp = this.showNextButton(index);
    const prevValueTemp = this.showPrevButton(index);
    this.setState({
      presentation:{
        ...this.state.presentation,
        currentSlideIndex:index
      },
      showPreviousButton:prevValueTemp,
      showNextButton:nextValueTemp
    });
  }

  updateVisited() {
    const slideToUpdate =
      this.state.presentation.listOfSlides[this.state.presentation.currentSlideIndex];
    slideToUpdate.visited=true;
    this.setState({listOfSlides:this.state.listOfSlides});
  }

  showNextButton(nextSlide) {
    const lastSlide = this.state.presentation.listOfSlides.length-1;
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

  // TODO: only move forward or back if valid
  nextSlide() {
    const nextSlide = this.state.presentation.currentSlideIndex+1;
    this.updateVisited();
    const nextValueTemp = this.showNextButton(nextSlide);
    const prevValueTemp = this.showPrevButton(nextSlide);
    this.setState({
      presentation:{
        ...this.state.presentation,
        currentSlideIndex:this.state.presentation.currentSlideIndex+1
      },
      showPreviousButton:prevValueTemp,
      showNextButton:nextValueTemp
    });
  }

  prevSlide() {
    const nextSlide = this.state.presentation.currentSlideIndex-1;
    this.updateVisited();
    const nextValueTemp = this.showNextButton(nextSlide);
    const prevValueTemp = this.showPrevButton(nextSlide);
    this.setState({
      presentation:{
        ...this.state.presentation,
        currentSlideIndex:this.state.presentation.currentSlideIndex-1
      },
      showPreviousButton:prevValueTemp,
      showNextButton:nextValueTemp
    });
  }

  render() {
    const presentationState = this.state.presentation;
    //const { onIncrement, onDecrement } = this.props;
    return (
      <div className="page">
        {/*<Link to="/home" component="{Home}">Home</Link>*/}
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
