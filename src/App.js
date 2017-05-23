import React, { Component } from 'react';
import Presentation from './Presentation';
import Navigation from './Navigation';

export default class App extends Component {
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

  showNextButton(nextSlide) {
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
                  allPresData={this.props.allPresData}
                  changeTitle={this.props.changeTitle}
                  showInputValue={this.props.showInputValue}
                  showInput={this.props.showInput}
                  presentationIndex={this.props.presentationIndex}
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
            onClick={this.nextSlide}>&#8594;</button> : null}
          {this.state.showPreviousButton ? <button className="Prev-Button"
            onClick={this.prevSlide}>&#8592;</button> : null}
        </div>
      </div>
    );
  }
}
