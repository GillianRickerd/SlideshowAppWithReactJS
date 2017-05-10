import React from 'react';
//import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';

//let store = createStore()
export const add = (a,b) => a+b;
export default class Title extends React.Component {
  constructor(props) {
    super(props);
    // do we need content here?
    this.state = { title:'', type:'title', content:[] };
  }
  PageInfo() {
    return $.getJSON('google.com/slide')
      .then((data) => {
        // how can we get data for individual variables?
        this.setState({ title:data.results })
      });
  }
  render() {
    return <div><button className="Next-Button" onClick={this.props.nextClick}>NEXT</button></div>;
  }

}
