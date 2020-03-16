//stores all the images coming from our mongo databse
const mongoAllImagesReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_MONGO_IMAGES':
            return state = action.payload;
        default:
            return state;
    }
}



export default mongoAllImagesReducer;