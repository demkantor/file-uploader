//captures each image as it comes in to be displayed
const singleImageReducer = (state='', action) => {
    switch (action.type) {
        case 'SET_THIS_IMAGE':
            return state = action.payload;
        default:
            return state;
    }
}


export default singleImageReducer;