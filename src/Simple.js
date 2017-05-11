import React from 'react';
//import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';

//let store = createStore()
export default class Simple extends React.Component {
  constructor(props) {
    super(props);
    // do we need content here?
    this.state = { title:'', type:'title', content:[] };
  }
  getPageInfo() {
    return $.getJSON('google.com/slide')
      .then((data) => {
        // how can we get data for individual variables?
        this.setState({ title:data.results })
      });
  }
  makeList(contentList) {
    for (var i = 0; i < contentList.length; i++) {
      return (<li>{contentList[i]}</li>);
    }
    return(<div></div>);
  }
  render() {
    return (
      <div className="simple-slide">
        <h1>{this.state.title}</h1>
        <ol>
          {this.makeList(this.state.content)}
        </ol>
        <button className="Next-Button" onClick={this.props.nextClick}>NEXT</button>
        <button className="Prev-Button" onClick={this.props.prevClick}>PREV</button>
      </div>
    );
  }

}
