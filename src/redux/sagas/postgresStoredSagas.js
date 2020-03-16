import axios from 'axios'
import {takeEvery, put} from "redux-saga/effects";


// these sagas take the dispatch and runs them before they get to the reducers
function* postgresStoredSagas() {
    yield takeEvery('GET_STORED_IMAGES', getImages);
    yield takeEvery('STORE_IMAGE', addImage);
}

//gets lists of server side stored images
function* getImages(){
    const imageList = yield axios.get('/api/postgres');
    console.log('in saga - get images/GET with:', imageList.data);
    yield put({type: 'SET_STORED_IMAGES', payload: imageList.data})
}

// posts new image to server
function* addImage(image){
    console.log('in saga images/POST with:', image.payload);
    const config = { headers: {'Content-Type': 'multipart/form-data'} }
    try {
        const res = yield axios.post('/api/postgres', image.payload, config);
        console.log('in saga post with res.data', res.data)
        yield put({type: 'STORE_THIS_IMAGE', payload: res.data});
        yield put({type: 'GET_STORED_IMAGES'});
    } catch(error){
        console.log('error in saga /images/POST:', error);
    }
}


export default postgresStoredSagas;