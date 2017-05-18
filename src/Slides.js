import React from 'react';
import './index.css';
import Title from './Title';
import Simple from './Simple';
import TwoColumn from './TwoColumn';

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
  getType(slideData) {
    const slideType = this.props.slideData.type;
    if (slideType === 'title') {
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
