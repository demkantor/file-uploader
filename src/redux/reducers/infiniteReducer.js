import { combineReducers } from 'redux';


//gets and stacks images to page
const imgReducer = (state = { images: [], fetching: true, }, action) => {
    switch (action.type) {
      case 'STACK_IMAGES':
        return { ...state, images: state.images.concat(action.images) }
      case 'FETCHING_IMAGES':
        return { ...state, fetching: action.fetching }
      default:
        return state;
    }
  }

  //advances page as it hits
  const pageReducer = (state = { page: 0 }, action) => {
    switch (action.type) {
      case 'ADVANCE_PAGE':
        return { ...state, page: state.page + 1 }
      default:
        return state;
    }
  }


//exports both reducers together
  export default combineReducers({
    imgReducer,
    pageReducer
  });