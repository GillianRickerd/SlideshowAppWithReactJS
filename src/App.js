import React, { Component } from 'react';
import './App.css';
import Slides from './Slides';
//import TitleSlide from './TitleSlide';

class App extends Component {
  constructor() {
    super();
    this.state = {

      // content: [{
      //   lines: Array().fill(null) // need size here
      // }],
    };
  }

  render() {
    return (
      <table className="page">
      <tbody>
        <tr>
          <td className="navigation">
            <p>test</p>
          </td>
          <td className="slides">
            //<SlideTitle title="title" />
            <div>
              <li>{this.state.content}</li>
            </div>


            <p>test</p>
          </td>
        </tr>
        </tbody>
      </table>

    );
  }
}

function SlideTitle(props) {
  return <h2>{props.title}</h2>;
}

export default App;
