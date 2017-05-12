// const click = (state = {}, action) => {
//   switch(action.type) {
//     case 'CLICK_TITLE':
//       return {
//         title: action.title,
//
//       }
//   }
// }
//
// const clickTitle = (state = [], action) => {
//   switch (action.type) {
//     case 'CLICK_TITLE':
//       return [
//         ...state,
//
//       ]
//   }
// }

export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
