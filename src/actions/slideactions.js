export const clickTitle = (title) => {
  console.log('the title was clicked');
  return {
    type: 'CLICK_TITLE',
    payload: title
  }
}
