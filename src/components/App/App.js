import React from 'react';
import './App.css';
import FileUpload from '../FileUpload/FileUpload';
import ImageUpload from '../ImageUpload/ImageUpload';
import ReduxUpload from '../ReduxUpload/ReduxUpload';
import Header from '../Header/Header';
import ReduxDisplayImages from '../ReduxDisplayImages/ReduxDisplayImages';
import {BrowserRouter as Router, Route} from 'react-router-dom';




const App = () => (
  <>
  <Router>
    <Header />
      <div className='container mt-4'>
        <div className='container'>
          <Route path="/header" component={Header}/>
          <Route exact path="/" component={FileUpload}/>
          <Route path="/imageUpload" component={ImageUpload}/>
          <Route path="/reduxUpload" component={ReduxUpload}/>
          <Route path="/reduxDisplayImages" component={ReduxDisplayImages}/>
        </div>
      </div>
    </Router>
  </>
);




export default App;