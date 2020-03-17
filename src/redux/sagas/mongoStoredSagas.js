import axios from 'axios'
import {takeEvery, put} from "redux-saga/effects";


// these sagas take the dispatch and runs them before they get to the reducers
function* mongoStoredSagas() {
    yield takeEvery('GET_MONGO_IMAGES', getImages);
    yield takeEvery('STORE_MONGO_IMAGE', addImage);
    yield takeEvery('GET_LAST_MONGO', getLastMongo);
}

//gets lists of mongoDB stored images
function* getImages(){
    const imageList = yield axios.get('/api/mongo');
    console.log('in saga - get mongo/GET with:', imageList.data);    
    yield put({type: 'SET_MONGO_IMAGES', payload: imageList.data})
}

//gets last mongoDB stored image
function* getLastMongo(){
    const imageList = yield axios.get('/api/mongo/last');
    console.log('in saga - get mongo/last/GET with:', imageList.data);    
    yield put({type: 'STORE_MONGO_IMAGE', payload: imageList.data})
}

// posts new image to mongoDB
function* addImage(image){
    console.log('in saga mongo/POST with:', image.payload);
    const config = { headers: {'Content-Type': 'multipart/form-data'} }
    try {
        const res = yield axios.post('/api/mongo', image.payload, config);
        console.log('back from mongo in saga post with res.data', res.data)
        // yield put({type: 'STORE_MONGO_IMAGE', payload: res.data});
        yield put({type: 'GET_MONGO_IMAGES'});
        yield put({type: 'GET_LAST_MONGO'});
    } catch(error){
        console.log('error in saga /images/POST:', error);
    }
}


export default mongoStoredSagas;