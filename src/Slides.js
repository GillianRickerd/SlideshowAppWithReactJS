import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import Title from './Title';
import Simple from './Simple';
import TwoColumn from './TwoColumn';
//import $ from 'jquery'

export default class Slides extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'title',
    };
  }

  // pass url in as param?
  // getTypeFromAPI() {
  //   return $.getJSON('google.com/type')
  //     .then((data) => {
  //       this.setState({ type:data.results })
  //     });
  // }

  getType() {
    // is using var okay? const or let instead?
    //this.getTypeFromAPI();
    var slideType = this.state.type;

    // are these types named like this?
    if (slideType === 'title') {
      return (<Title />);
    } else if (slideType === 'simple') {
      return (<Simple />);
    } else if (slideType === 'twocolumn') {
      return (<TwoColumn />);
    } else {
      return (<div></div>);
    }
  }

  render() {
    return(<div>{this.getType()}</div>);
  }

}
