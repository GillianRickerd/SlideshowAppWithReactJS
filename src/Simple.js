import React from 'react';
//import { createStore } from 'redux';
//import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import {clickTitle} from './actions/slideactions';

//let store = createStore()
export default class Simple extends React.Component {

  getPageInfo() {
    return $.getJSON('google.com/slide')
      .then((data) => {
        // how can we get data for individual variables?
        this.setState({ title:data.results })
      });
  }

  makeList(contentList) {
    return(
      <ul>
        {contentList.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    );
    // for (var i = 0; i < contentList.length; i++) {
    //   return (<li>{contentList[i]}</li>);
    // }
    // return(<div></div>);
  }
  render() {
    return (
      <div>
        <div className="simple-slide">
          <h1 onClick={clickTitle}>{this.props.simpleData.title}</h1>

            {this.makeList(this.props.simpleData.content)}
        </div>

      </div>
    );
  }

}
