import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import Title from './title';
import Simple from './simple';
import TwoColumn from './twocolumn';

export default class Slides extends React.Component {
  constructor() {
    super();
    this.state = {
      type: '',
    };
  }

  getTypeFromAPI() {
    return $.getJSON('google.com/slide/type')
      .then((data) => {
        this.setState({ type:data.results })
      });
  }

  getType() {
    // is using var okay? const or let instead?
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
    return(<div></div>);
  }

}
