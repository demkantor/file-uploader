const pgSingleReducer = (state = '', action) => {
    switch (action.type) {
        case 'STORE_THIS_IMAGE':
            return state = action.payload;
        default:
            return state;
    }
}



export default pgSingleReducer;