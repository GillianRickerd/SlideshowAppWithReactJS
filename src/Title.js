import React from 'react';
//import { createStore } from 'redux';
//import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
//import {clickTitle} from '../actions/index';
//import { connect } from 'react-redux';
//import {bindActionCreators} from 'redux'

//let store = createStore()
export default class Title extends React.Component {

  getPageInfo() {
    return $.getJSON('google.com/slide')
      .then((data) => {
        this.setState({ title:data.results })
      });
  }

  render() {
    return (
      <div className="title-slide">
        <h1 className="center-title" onClick={() =>
          this.state.clickTitle(this.props.titleData.title)}>
          {this.props.titleData.title}
        </h1>
      </div>
    );
  }
}
//
// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({clickTitle:title}, dispatch);
// }

// const mapStateToProps = (state) => {
//   return {
//
//   };
// };

//export connect(mapStateToProps, matchDispatchToProps)(Title);
