import { all } from 'redux-saga/effects';
import serverStoredSagas from './serverStoredSagas';
import postgresStoredSagas from './postgresStoredSagas';
import mongoStoredSagas from './mongoStoredSagas';
// import infiniteSagas from './infiniteSagas';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga


export default function* rootSaga() {
  yield all([
    serverStoredSagas(),
    postgresStoredSagas(),
    mongoStoredSagas(),
    // infiniteSagas()
  ]);
}