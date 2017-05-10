import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';

class Slides extends React.Component {
  constructor() {
    super();
    this.state = {
      type: null,
    };
  }

  getType() {
    var slideType = this.state.type;
    if (slideType === 'title') {
      return (<div></div>);
    }
    return (
      <div>
      <div>
        <li>{this.state.type}</li>
      </div>
      </div>
    );
  }

    // const contentItems = ["hello", "bonjour", "hola", "ciao"];
    // const listContentItems = contentItems.map((item) =>
    //   <li>{item}</li>
    // );
    //
    // render() {
    //   return (
    //     // add title tag
    //     <ul>{listContentItems}</ul>
    //   );
    // }

  //}
}
