import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css'

import Message from '../Message/Message';
import Progress from '../Progress/Progress';
import ReduxDisplayImages from '../ReduxDisplayImages/ReduxDisplayImages';



class ReduxUpload extends Component {

    state={
        file: '',
        filename: 'Choose File',
        uploadedFile: {},
        message: '',
        uploadPercentage: 0
    }

    //this function is cleaner to run in form but bringing it out here makes it more visable
    onChange = (e) => {
        this.setState({
            file: e.target.files[0],
            filename: e.target.files[0].name
        })
    };
  
    onSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', this.state.file);
        //send the info collected to sagas, the file object cant be read just by console logging
      this.props.dispatch({ type: "ADD_IMAGE", payload: formData});
    };


    render() {
        return (
            <div className="imageUpload">
                <h3 className='text-center'>
                    image will be sent through Redux 
                </h3>
                <br/>
                <p className='text-center' >
                    written in class component
                </p>
                {this.state.message ? <Message msg={this.state.message} /> : null}
                <form onSubmit={this.onSubmit}>
                    <div className='custom-file mb-4'>
                    <input
                        type='file'
                        className='custom-file-input'
                        id='customFile'
                        onChange={this.onChange}
                    />
                    <label className='custom-file-label' htmlFor='customFile'>
                        {this.state.filename}
                    </label>
                    </div>

                    <Progress percentage={this.state.uploadPercentage} />

                    <input
                    type='submit'
                    value='Upload'
                    className='btn btn-primary btn-block mt-4'
                    />
                </form>
                {this.state.uploadedFile ? (
                    <div className='row mt-5'>
                    <div className='col-md-6 m-auto'>
                        <h3 className='text-center'>{this.props.reduxState.singleImage.fileName}</h3>
                        <img style={{ width: '100%' }} src={this.props.reduxState.singleImage.filePath} alt='' />
                    </div>
                    </div>
                ) : null}
                <ReduxDisplayImages/> 
            </div>
        );
      }
    }
    

    
    const putReduxStateOnProps = (reduxState) => ({
        reduxState
      });
      
    export default connect(putReduxStateOnProps)(ReduxUpload);