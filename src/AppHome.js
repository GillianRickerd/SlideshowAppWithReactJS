import React, { Component } from 'react';
import App from './App';
//import Request from 'superagent';

export default class AppHome extends Component {
  constructor() {
    super();
    this.state = {
      appOwner: 'Gillian',
      presentations: [
        { presentation: {
          title: 'Names',
          listOfSlides: [
            {type:'title',
              title:'title slide',
              content:[],
              visited:false},
            {type:'simple',
              title:'simple slide',
              content:['name', 'name2', 'name3'],
              visited:false},
            {type:'twocolumn',
              title:'column slide',
              content:['gillian', 'jacob', 'charlotte'],
              content2:['amy', 'kevin', 'julia'],
              visited:false}],
          },
          showInput:false
        },
        { presentation: {
          title: 'Animals',
          listOfSlides: [
            {type:'title',
              title:'title slide',
              content:[],
              visited:false},
            {type:'simple',
              title:'simple slide',
              content:['panda', 'puppy', 'kitten'],
              visited:false},
            {type:'twocolumn',
              title:'column slide',
              content:['animal', 'animal2', 'animal3'],
              content2:['animal4', 'animal5', 'animal6'],
              visited:false}],
          }
        },
        { presentation: {
          title: 'Colors',
          listOfSlides: [
            {type:'title',
              title:'title slide',
              content:[],
              visited:false},
            {type:'simple',
              title:'simple slide',
              content:['pink', 'purple', 'black'],
              visited:false},
            {type:'twocolumn',
              title:'column slide',
              content:['red', 'green', 'white'],
              content2:['blue', 'yellow', 'orange'],
              visited:false}],
          }
        }
      ],
      currentSlideIndex:0,
      display: 0,

    }
    this.updatePresentation = this.updatePresentation.bind(this);
    this.updateVisited = this.updateVisited.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateSlideIndex = this.updateSlideIndex.bind(this);
    this.showInput = this.showInput.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
  };
  // componentWillMount() {
  //   const url = "https://sleepy-crag-55142.herokuapp.com/api/v1";
  //   Request.get(url).then((response) => {
  //     this.setState({
  //       ...this.state,
  //       // how to separate this data
  //       presentations: response
  //     });
  //   });
  // }
  updateSlideIndex(index) {
    this.setState({
      ...this.state,
      currentSlideIndex:index
    });
  }
  updatePresentation(index) {
    this.revertVisitedList();
    this.setState({
      ...this.state,
      display: index,
      currentSlideIndex:0,
    })
  };
  revertVisited(index) {
    const slideToUpdate = this.state.presentations[this.state.display].presentation.listOfSlides[index];
    slideToUpdate.visited=false;
    this.setState({listOfSlides:this.state.presentations[this.state.display].presentation.listOfSlides});
  }
  revertVisitedList() {
    const slides = this.state.presentations[this.state.display].presentation.listOfSlides;
    slides.map((item, index) => this.revertVisited(index));
  }
  updateVisited() {
    const slideToUpdate = this.state.presentations[this.state.display].presentation.listOfSlides[this.state.currentSlideIndex];
    slideToUpdate.visited=true;
    this.setState({listOfSlides:this.state.presentations[this.state.display].presentation.listOfSlides});
  }
  handleChange(e) {
    this.setState({
      ...this.state,
      appOwner:e.target.value
    });
  }
  showInput(index) {
    console.log("showing input");
    const presentationToEdit = this.state.presentations[index];
    presentationToEdit.showInput=!presentationToEdit.showInput;
    this.setState({presentations:this.state.presentations});
    console.log(this.state.presentations[index].showInput);
  }
  changeTitle(e) {
    console.log(this.state.display + " change title");
    const presentationToEdit = this.state.presentations[this.state.display].presentation;
    console.log(presentationToEdit);
    presentationToEdit.title=e.target.value;
    this.setState({
      ...this.state,
      presentations:this.state.presentations
    });
  }
  render() {
    const presentationToDisplay = this.state.presentations[this.state.display].presentation;
    return (
      <div>
        <h1>Welcome to {this.state.appOwner}&#39;s Slideshow App</h1>
        <div>
          <form><h3>
            <label>
              App Owner:
              <input type="text" onChange={this.handleChange} />
            </label></h3>
          </form>
          {this.state.presentations.map((item, index) =>
            <h3 className="home-links" key={index}>
              <a onClick={() => this.updatePresentation(index)}
                 onDoubleClick={() => this.showInput(index)}
                 href="#">{item.presentation.title}</a>
            </h3>)}
          <App
            allPresData={this.state.presentations[this.state.display]}
            changeTitle={this.changeTitle}
            presentationIndex={this.state.display}
            showInput={this.showInput}
            updateSlideIndex={this.updateSlideIndex}
            updateVisited={this.updateVisited}
            changeTitle={this.changeTitle}
            currentSlideIndex={this.state.currentSlideIndex}
            presentation={presentationToDisplay} />
        </div>
      </div>
    );
  };
}
