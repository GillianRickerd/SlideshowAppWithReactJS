import React, { Component } from 'react';
import './App.css';
//import Slides from './Slides';
import Presentation from './Presentation';
import Navigation from './Navigation';
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
      <div className="page">
        <table className="">
        <tbody>
          <tr>
            <td className="navigation">
              <Navigation />
            </td>
            <td className="slides">
              <div className="title-slide">
                <Presentation />
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    );
  }
}

export default App;
