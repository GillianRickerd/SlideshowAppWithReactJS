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
      <td><ul>
        {contentList.map((item, index) => <li key={index}>{item}</li>)}
      </ul></td>
    );
  }
  render() {
    return (
      <div className="two-column-slide">
        <h1>{this.props.twoColumnData.title}</h1>
        <table>
          <tbody>
            <tr>
              {this.makeColumn(this.props.twoColumnData.content)}
              {this.makeColumn(this.props.twoColumnData.content2)}
            </tr>
          </tbody>
        </table>

      </div>
    );
  }

}
