import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';



class MongoDisplayImages extends Component {

  //bring in list of images stored on server
  componentDidMount =()=>{
    this.props.dispatch({ type: "GET_MONGO_IMAGES" });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Displays images from MongoDB sent through redux</h1>
        <p className='text-center'>MongoDB stores images more permanently than on server alone</p>
          {this.props.reduxState.mongoAll && (
              <div className="gridContainer">
                {this.props.reduxState.mongoAll.map(pic => (
                  <div className="display" key={pic._id}>
                    <h4>{pic.image_name}</h4>
                    <p>{pic.image_date}</p>
                    <p>{pic.image_mimetype}</p>
                    <img className="image" alt={pic.image_name} src={`data:image/jpeg;base64,${pic.image_image.data}`} width="100px"/>
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
  
  export default connect(putReduxStateOnProps)(MongoDisplayImages);