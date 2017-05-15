import React/*, { Component }*/ from 'react';
import './index.css';
//import App from './App';
// class buttons extends Component {
//   render() {
//     return (
//       <button className="Next-Button">NEXT</button>
//     );
//   }
// }



const prevButton = React.createClass({
  render: function() {
    return (
      <div>
      <button className="Prev-Button">PREV</button>
      </div>
    );
  }
});

const showHide = React.createClass({
  getInitialState: function() {
    return { buttonVisible:false };
  },
  render: function() {
    return(
      <div>
        <div onClick={this.onClick}>
          text
        </div>
        {
          this.state.buttonVisible
            ? <prevButton />
            : null
        }
      </div>
  )},
  onClick: function() {

    if (this.props.slideIndex===0) {
      this.setState({ buttonVisible: false });
    } else {
      this.setState({ buttonVisible: true });
    }
  }
});

// React.render(<showHide />, document.body);
export default showHide;
