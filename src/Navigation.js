import React, { Component } from 'react';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navData: {
        title: '',
        listOfSlides: [],
        currentSlideIndex: 0,
      }
    };
  }
  getVisitedValue(item) {
    if (item.visited===true) {
      return (<b>&#10003;</b>);
    } else {
      return (<b className="list-indent"></b>)
    }
  }
  findListed(slideTitles) {
    return(
      <div className="list">
        {slideTitles.map((item, index) =>
          <p key={index}>{this.getVisitedValue(item)} &nbsp;
            <a onClick={() => this.props.updateSlide(index)} href="#">{item.title}</a></p>)}

      </div>
    );
  }
  render() {
    return(
      <div>
        <h3 className="navigation-title"
          onDoubleClick={() => this.props.showInput(this.props.presentationIndex)}>
            {this.props.allPresData.showInput ?
              <form><input type="text" onChange={this.props.changeTitle}/></form>
              : <b>{this.props.navData.title}</b>}
        </h3>
        <div>
          {this.findListed(this.props.navData.listOfSlides)}
        </div>
      </div>
    );
  }
}
