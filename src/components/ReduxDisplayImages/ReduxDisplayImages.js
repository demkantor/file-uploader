import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';



class ReduxDisplayImages extends Component {


  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>this will display all images sent through redux</h1>
        <p className='text-center'>redux reducers dont hold memory forever, keep this in mind....</p>
          {this.props.reduxState.images && (
              <div className="gridContainer">
                {this.props.reduxState.images.map((pic, i )=> (
                  <div className="display" key={i}>
                    <h3>{pic.fileName}</h3>
                    <img className="image" alt={pic.fileName} src={pic.filePath} width="100px"/>
                  </div>
                  ))}
                </div>
              )}
      </div>
    )
  }
}




const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(ReduxDisplayImages);