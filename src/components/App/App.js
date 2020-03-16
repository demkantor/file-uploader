import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import FileUpload from '../FileUpload/FileUpload';
import ImageUpload from '../ImageUpload/ImageUpload';
import ReduxUpload from '../ReduxUpload/ReduxUpload';
import PostgresUpload from '../PostgresUpload/PostgresUpload'
import ReduxDisplayImages from '../ReduxDisplayImages/ReduxDisplayImages';
import PostgresDisplayImages from '../PostgresDisplayImages/PostgresDisplayImages';





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
          <Route path="/postgresUpload" component={PostgresUpload}/>
          <Route path="/reduxDisplayImages" component={ReduxDisplayImages}/>
          <Route path="/postgresDisplayImages" component={PostgresDisplayImages}/>
        </div>
      </div>
    </Router>
  </>
);




export default App;