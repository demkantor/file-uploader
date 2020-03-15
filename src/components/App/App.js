import React from 'react';
import FileUpload from '../FileUpload/FileUpload';
import ImageUpload from '../ImageUpload/ImageUpload';
import './App.css';




const App = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
    <span role="img" aria-label="picture">🖼️</span>
      Upload An Image
    <span role="img" aria-label="picture">🖼️</span>
    </h4>

    <FileUpload />

    <ImageUpload />
  </div>
);




export default App;