import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

//need to get all sagas and reducers
import rootSaga from './redux/sagas';
import rootReducer from './redux/reducers'

//always need app.js!
import App from './components/App/App';


const sagaMiddleware = createSagaMiddleware();

//logger will be removed when put into production automatically
const middlewareList = process.env.NODE_ENV === 'development' 
?
[sagaMiddleware, logger] 
:
[sagaMiddleware];


const storeInstance = createStore(
    rootReducer,
    applyMiddleware(...middlewareList),
  );


// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));