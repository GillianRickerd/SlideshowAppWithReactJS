import React, {Component} from 'react';
import './index.css';
import $ from 'jquery';
import {clickTitle} from './actions/slideactions';

export default class Simple extends Component {
  makeList(contentList) {
    return(
      <ul>
        {contentList.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    );
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
