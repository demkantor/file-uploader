import React, {Component} from 'react';
import Message from '../Message/Message';
import Progress from '../Progress/Progress';
import axios from 'axios';
import '../App/App.css'





class ImageUpload extends Component {

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
      console.log('submitting image....')
      const formData = new FormData();
      formData.append('file', this.state.file);
  
      try {
        const res = await axios.post('/api/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: progressEvent => {
              this.setState({
                  uploadPercentage: parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
              });
            console.log('in axios/post to server');
            // Clear percentage
            setTimeout(() => this.setState({uploadPercentage: 0}), 10000);
            // Clear last file name
            setTimeout(() => this.setState({filename: 'Choose File'}), 10000);
          }
        });
        console.log('response:', res.data);
        const { fileName, filePath } = res.data;
        this.setState({
            uploadedFile: {
                filename: fileName,
                filepath: filePath
                },
            message: 'File Uploaded'
        });
      } catch (err) {
        if (err.response.status === 500) {
          this.setState({
              message: 'There was a problem with the server'
           });
        } else {
            this.setState({
                message: err.response.data.msg
             });
        }
      }
    };



    render() {
        return (
            <div className="imageUpload">
                <h3 className='text-center'>
                    image will be sent through redux
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
                        <h3 className='text-center'>{this.state.uploadedFile.filename}</h3>
                        <img style={{ width: '100%' }} src={this.state.uploadedFile.filepath} alt='' />
                    </div>
                    </div>
                ) : null}
            </div>
        );
      }
    }
    

    

export default ImageUpload;