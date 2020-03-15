import {combineReducers} from 'redux';




//captures each image as it comes in to be displayed
const oneReducer = (state='', action) => {
    switch (action.type) {
        case 'SET_THIS_IMAGE':
            return state = action.payload;
        default:
            return state;
    }
}

// stores an array of all images on server
const imageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return action.payload;
        default:
            return state;
    }
}



const mainReducer = combineReducers({
    oneReducer,
    imageReducer
});

    
export default (mainReducer);