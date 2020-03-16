import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';



class PostgresDisplayImages extends Component {

  //bring in list of images stored on server
  componentDidMount =()=>{
    this.props.dispatch({ type: "GET_STORED_IMAGES" });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Displays images from postgres sent through redux</h1>
        <p className='text-center'>postgres stores images more securely than on server alone</p>
          {this.props.reduxState.postgressAll && (
              <div className="gridContainer">
                {this.props.reduxState.postgressAll.map(pic => (
                  <div className="display" key={pic.id}>
                    <h4>{pic.name}</h4>
                    <p>{pic.mime_type}</p>
                    <img className="image" alt={pic.name} src={pic.data} width="100px"/>
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
  
  export default connect(putReduxStateOnProps)(PostgresDisplayImages);