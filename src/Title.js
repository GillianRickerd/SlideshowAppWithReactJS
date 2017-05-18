import React, {Component} from 'react';
import './index.css';

export default class Title extends Component {
  render() {
    return (
      <div className="title-slide">
        <h1 className="center-title">
          {this.props.titleData.title}
        </h1>
      </div>
    );
  }
}
