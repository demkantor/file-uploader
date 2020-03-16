import { combineReducers } from 'redux';
import images from './allImagesReducer';
import singleImage from './singleImageReducer'
import postgressAll from './postgresAllImagesReducer'
import pgSingle from './pgSingleImageReducer'



// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  images, // contains server side storage of images
  singleImage,
  postgressAll,
  pgSingle
});

export default rootReducer;