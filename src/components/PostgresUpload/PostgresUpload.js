import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from '../Message/Message';
import Progress from '../Progress/Progress';
import '../App/App.css'
import PostgresDisplayImages from '../PostgresDisplayImages/PostgresDisplayImages';



class PostgresUpload extends Component {

    state={
        file: '',
        filename: 'Choose File',
        uploadedFile: {},
        message: '',
        uploadPercentage: 0
    }

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

      this.props.dispatch({ type: "STORE_IMAGE", payload: formData});
    };


    render() {
       
        // const newImage = Buffer.from(this.props.reduxState.pgSingle.image).toString("base64");
        return (
            <div className="imageUpload">
                <h3 className='text-center'>
                    image will be sent through Redux and be stored in Postgres database
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
                        <h3 className='text-center'>{this.props.reduxState.pgSingle.name}</h3>
                        <img style={{ width: '100%' }} src={`data:image/jpeg;base64,${this.props.reduxState.pgSingle.image}`} alt={this.props.reduxState.pgSingle.name} />
                    </div>
                    </div>
                ) : null}
                <PostgresDisplayImages/>
            </div>
        );
      }
    }
    

    
    const putReduxStateOnProps = (reduxState) => ({
        reduxState
      });
      
    export default connect(putReduxStateOnProps)(PostgresUpload);