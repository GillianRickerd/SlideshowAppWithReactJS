// //import fetch from 'isomorphic-fetch';
//
// export const REQUEST_PRESENTATION = 'REQUEST_PRESENTATION';
// export const RECEIVE_PRESENTATION = 'RECEIVE_PRESENTATION';
// export const REQUEST_SLIDE = 'REQUEST_SLIDE';
// export const RECEIVE_SLIDE = 'RECEIVE_SLIDE';
//
export const clickTitle = (title) => {
  console.log('the title was clicked');
  return {
    type: 'CLICK_TITLE',
    payload: title
  }
}

export const nextSlide = (currentSlideIndex) => {
  const nextIndex = currentSlideIndex + 1;
  this.props.presentation.currentSlideIndex = nextIndex;
  return {
    type: 'NEXT_SLIDE',
    payload: currentSlideIndex
  };
}

//
// export function requestPresentation(app) {
//   return {
//     type: REQUEST_PRESENTATION,
//     app,
//     presentation
//   }
// }
//
// export function receivePresentation(app, json) {
//   return {
//     type: RECEIVE_PRESENTATION,
//     app,
//     presentation: json.data.children.map(child => child.data)
//   }
// }
//
// export function requestSlide(presentation) {
//   return {
//     type: REQUEST_SLIDE,
//     presentation
//   }
// }
//
// export function receiveSlide(presentation, json) {
//   return {
//     type: RECEIVE_SLIDE,
//     presentation,
//     // how should this be divided?
//     slide: json.data.children.map(child => child.data)
//   }
// }
//
// export function fetchSlide(presentation) {
//   return dispatch => {
//     dispatch(requestSlide(presentation))
//     return fetch('apiurl/presentation_name.json')
//       .then(response => response.json())
//       .then(json => dispatch(receiveSlide(presentation, json)))
//   }
// }
