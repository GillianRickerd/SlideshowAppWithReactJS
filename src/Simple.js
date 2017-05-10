import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class TitleSlide extends Slides {
  constructor(props) {
    super(props);
    this.state.title = 'content slide';
    this.state.content = ["hello", "bonjour", "hola"];
  }
}
