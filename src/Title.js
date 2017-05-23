import React, {Component} from 'react';

export default class Title extends Component {
  render() {
    return (
      <h1 className="center-title">
        {this.props.titleData.title}
      </h1>
    );
  }
}
