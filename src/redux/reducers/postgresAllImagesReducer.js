// stores an array of all images on server
const postgresAllImagesReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_STORED_IMAGES':
            return state = action.payload;
        default:
            return state;
    }
}



export default postgresAllImagesReducer;