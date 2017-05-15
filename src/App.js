import React, { Component } from 'react';
import './App.css';
//import Slides from './Slides';
import Presentation from './Presentation';
import Navigation from './Navigation';
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
      }
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  // TODO: only move forward or back if valid
  nextSlide() {
    this.updateVisited();
    this.setState({
      presentation:{
        ...this.state.presentation,
        currentSlideIndex:this.state.presentation.currentSlideIndex+1
      }
    });
  }

  prevSlide() {
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

  // if (this.state.presentation.currentSlideIndex===0) {
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
          <div>
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
