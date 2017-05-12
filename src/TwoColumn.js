import React from 'react';
//import { createStore } from 'redux';
//import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';

//let store = createStore()
export default class TwoColumn extends React.Component {
  getPageInfo() {
    return $.getJSON('google.com/slide')
      .then((data) => {
        // how can we get data for individual variables?
        this.setState({ title:data.results })
      });
  }
  makeColumn(contentList) {
    return(
      <ul>
        {contentList.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    );
  }
  render() {
    return (
      <div className="two-column-slide">
        <h1>{this.props.twoColumnData.title}</h1>
        <table>
          <tbody>
            <tr>
              <td>
                {this.makeColumn(this.props.twoColumnData.content)}
              </td>
              <td>
                {this.makeColumn(this.props.twoColumnData.content2)}
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }

}
