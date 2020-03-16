import axios from 'axios'
import {takeEvery, put} from "redux-saga/effects";


// these sagas take the dispatch and runs them before they get to the reducers
function* mongoStoredSagas() {
    yield takeEvery('GET_MONGO_IMAGES', getImages);
    yield takeEvery('STORE_MONGO_IMAGE', addImage);
}

//gets lists of mongoDB stored images
function* getImages(){
    const imageList = yield axios.get('/api/postgres');
    console.log('in saga - get images/GET with:', imageList.data);
    yield put({type: 'SET_MONGO_IMAGES', payload: imageList.data})
}

// posts new image to mongoDB
function* addImage(image){
    console.log('in saga images/POST with:', image.payload);
    const config = { headers: {'Content-Type': 'multipart/form-data'} }
    try {
        const res = yield axios.post('/api/postgres', image.payload, config);
        console.log('in saga post with res.data', res.data)
        yield put({type: 'STORE_MONGO_IMAGE', payload: res.data});
        yield put({type: 'GET_MONGO_IMAGES'});
    } catch(error){
        console.log('error in saga /images/POST:', error);
    }
}


export default mongoStoredSagas;