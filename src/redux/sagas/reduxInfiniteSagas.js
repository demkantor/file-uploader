import axios from 'axios'
import {takeEvery, put} from "redux-saga/effects";


// these sagas take the dispatch and runs them before they get to the reducers
function* infiniteSagas() {
    yield takeEvery('GET_INFINITE_IMAGES', getInfiniteImages);
}

//gets images from picsum api
function* getInfiniteImages(data){
    console.log('page:', data.payload.page)
    yield put({ type: 'STOP_START_IMAGES', fetching: true });
    const imageList = yield axios.get(`https://picsum.photos/v2/list?page=${data.payload.page}&limit=10`);
    console.log('in saga - infinite /GET with:', imageList.data);    
    yield put({type: 'INFINITE_IMAGES', payload: imageList.data});
    yield put({ type: 'STOP_START_IMAGES', fetching: false });
}





export default infiniteSagas;