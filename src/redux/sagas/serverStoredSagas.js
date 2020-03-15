import axios from 'axios'
import mainReducer from '../reducers/imageReducer';
import {createStore,  applyMiddleware} from 'redux';
import logger from 'redux-logger';

// Imported saga middleware
import {takeEvery, put} from "redux-saga/effects";
import createSagaMiddleware from 'redux-saga';

// Create sagaMiddlewareWelcome to the super secert awesome admin page
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    mainReducer,
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);


// these sagas take the dispatch and runs them before they get to the reducers
function* rootSaga() {
    yield takeEvery('GET_IMAGES', getImages);
    yield takeEvery('ADD_IMAGE', addImage);
}

function* getImages(){
    const imageList = yield axios.get('/api/image');
    console.log('in saga - get images/GET with:', imageList.data);
    yield put({type: 'SET_IMAGES', payload: imageList.data})
}

function* addImage(image){
    console.log('in saga images/POST with:', image.payload);
    const config = { headers: {'Content-Type': 'multipart/form-data'} }
    try {
        const res = yield axios.post('/api/image/', image.payload, config);
        console.log('in saga post with res.data', res.data)
        yield put({type: 'SET_THIS_IMAGE', payload: res.data});
    } catch(error){
        console.log('error in saga /images/POST:', error);
    }
}









export default (sagaMiddleware, storeInstance);