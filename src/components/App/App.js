import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import FileUpload from '../FileUpload/FileUpload';
import ImageUpload from '../ImageUpload/ImageUpload';
import ReduxUpload from '../ReduxUpload/ReduxUpload';
import PostgresUpload from '../PostgresUpload/PostgresUpload';
import MongoUpload from '../MongoUpload/MongoUpload';
import ReduxDisplayImages from '../ReduxDisplayImages/ReduxDisplayImages';
import PostgresDisplayImages from '../PostgresDisplayImages/PostgresDisplayImages';
import MongoDisplayImages from '../MongoDisplayImages/MongoDisplayImages';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import ReduxInfinitly from '../ReduxInfinitly/ReduxInfinitly';


//this is App,js written as a functional component, sill uploading and displaying what we want just written differently
//using FileUpload as /home so it is always displayed on load, other routes esily accesable via links in header

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
          <Route path="/mongoUpload" component={MongoUpload}/>
          <Route path="/infiniteScroll" component={InfiniteScroll}/>
          <Route path="/reduxInfinitly" component={ReduxInfinitly}/>
          <Route path="/reduxDisplayImages" component={ReduxDisplayImages}/>
          <Route path="/postgresDisplayImages" component={PostgresDisplayImages}/>
          <Route path="/mongoDisplayImages" component={MongoDisplayImages}/>
        </div>
      </div>
    </Router>
  </>
);




export default App;