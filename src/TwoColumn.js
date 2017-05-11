import React from 'react';
//import { createStore } from 'redux';
//import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';

//let store = createStore()
export default class TwoColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title:'', type:'title', content:[], content2:[] };
  }
  getPageInfo() {
    return $.getJSON('google.com/slide')
      .then((data) => {
        // how can we get data for individual variables?
        this.setState({ title:data.results })
      });
  }
  makeColumn1(contentList) {
    for (var i = 0; i < contentList.length; i++) {
      return (<li>{contentList[i]}</li>);
    }
  }
  makeColumn2(contentList) {
    for (var i = 0; i < contentList.length; i++) {
      return (<li>{contentList[i]}</li>);
    }
  }
  render() {
    return (
      <div className="two-column-slide">
        <h1>{this.state.title}</h1>
        // make these lists in line horizontally
        // maybe put in a div
        <ol>
          {this.makeColumn1(this.state.content)}
        </ol>
        <ol>
          {this.makeColumn2(this.state.content2)}
        </ol>
        <button className="Next-Button" onClick={this.props.nextClick}>NEXT</button>
        <button className="Prev-Button" onClick={this.props.prevClick}>PREV</button>
      </div>
    );
  }

}
