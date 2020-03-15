import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux';
import axios from 'axios';
import {createStore,  applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {combineReducers} from 'redux';

// Imported saga middleware
import {takeEvery, put} from "redux-saga/effects";
import createSagaMiddleware from 'redux-saga';


// Create sagaMiddlewareWelcome to the super secert awesome admin page
const sagaMiddleware = createSagaMiddleware();


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

const oneReducer = (state='', action) => {
    switch (action.type) {
        case 'SET_THIS_IMAGE':
            return state = action.payload;
        default:
            return state;
    }
}

const imageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return action.payload;
        default:
            return state;
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
    oneReducer,
    imageReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);



// Pass rootSaga into our sagaMiddlewareclassName='uploadButton'
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
