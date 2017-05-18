import React, {Component} from 'react';
import './index.css';

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
