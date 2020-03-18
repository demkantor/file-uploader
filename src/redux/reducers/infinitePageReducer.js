  //advances page as it hits
  const infinitePageReducer = (state = { page: 0 }, action) => {
    switch (action.type) {
      case 'INFINITE_PAGE':
        return { ...state, page: state.page + 1 }
      default:
        return state;
    }
  }


  export default infinitePageReducer