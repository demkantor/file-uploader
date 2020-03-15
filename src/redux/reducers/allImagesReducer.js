// stores an array of all images on server
const allImagesReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return state = action.payload;
        default:
            return state;
    }
}



export default allImagesReducer;