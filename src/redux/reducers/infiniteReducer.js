
//gets and stacks images to page
const infiniteImageReducer = (state = { images: [], fetching: true, }, action) => {
    switch (action.type) {
      case 'INFINITE_IMAGES':
        return { ...state, images: action.payload}
      case 'STOP_START_IMAGES':
        return { ...state, fetching: action.fetching }
      default:
        return state;
    }
  }


  export default infiniteImageReducer;