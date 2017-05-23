import React, {Component} from 'react';
// import './index.css';

export default class TwoColumn extends Component {
  makeColumn(contentList) {
    return(
      <td><ul>
        {contentList.map((item, index) => <li key={index}>{item}</li>)}
      </ul></td>
    );
  }
  render() {
    return (
      <div>
        <h1>{this.props.twoColumnData.title}</h1>
        <table className="columns">
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
