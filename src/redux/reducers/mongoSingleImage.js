//stores the image being uploaded to mongoDB
const mongoSingleReducer = (state = '', action) => {
    switch (action.type) {
        case 'STORE_MONGO_IMAGE':
            return state = action.payload;
        default:
            return state;
    }
}



export default mongoSingleReducer;