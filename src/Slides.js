import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';

import Title from './Title';
import Simple from './Simple';
import TwoColumn from './TwoColumn';
//import $ from 'jquery'

export default class Slides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideData: {
        type:'',
        title:'',
        content:[],
      }
    };
  }

  // pass url in as param?
  // getTypeFromAPI() {
  //   return $.getJSON('google.com/type')
  //     .then((data) => {
  //       this.setState({ type:data.results })
  //     });
  // }

  // updateVisited(data) {
  //   data.visited===true;
  // }

  getType(slideData) {
    //this.getTypeFromAPI();
    //console.log(this.props.slideData);
    const slideType = this.props.slideData.type;
    // are these types named like this?
    if (slideType === 'title') {
      // this.updateVisited(this.props.slideData);
      return (<Title titleData={this.props.slideData} />);
    } else if (slideType === 'simple') {
      return (<Simple simpleData={this.props.slideData}/>);
    } else if (slideType === 'twocolumn') {
      return (<TwoColumn twoColumnData={this.props.slideData}/>);
    } else {
      return (<div></div>);
    }
  }

  render() {
    return(<div>{this.getType(this.props.slideData)}</div>);
  }

}
