import React from 'react';
import './App.css';
import FileUpload from '../FileUpload/FileUpload';
import ImageUpload from '../ImageUpload/ImageUpload';
import ReduxUpload from '../ReduxUpload/ReduxUpload';
import Header from '../Header/Header';
import DisplayImages from '../DisplayImages/DisplayImages';




const App = () => (
  <div className='container mt-4'>
    <Header />
    <div className='container'>
      <FileUpload />
      <ImageUpload />
      <ReduxUpload />
      <DisplayImages />
    </div>
  </div>
);




export default App;