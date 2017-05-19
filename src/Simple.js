import React, {Component} from 'react';
import {clickTitle} from './actions/slideactions';

export default class Simple extends Component {
  makeList(contentList) {
    return(
      <ul className="columns">
        {contentList.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <h1 onClick={clickTitle}>{this.props.simpleData.title}</h1>
          {this.makeList(this.props.simpleData.content)}
      </div>
    );
  }
}
