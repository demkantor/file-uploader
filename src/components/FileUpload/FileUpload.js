import React, {useState} from 'react';
import Message from '../Message/Message';
import Progress from '../Progress/Progress';
import axios from 'axios';



//this is the same as ImageUpload but writen in a function component, notice how we use state here via hooks?
//what other differences are there between functional and class components?
const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);


  //normally this would be cleaner to write in line with the form but im leaving it here to easier see actions taken
  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  //running the axios request right here, would it be better to bring in redux?
  const onSubmit = async e => {
    e.preventDefault();
    console.log('submitting image....')
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/api/image', formData, {
        //header are needed to let axios know what to parse in form data, can bewriten as a config and passed as an argument along with URL and data, see my exampl in sagas
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        //this is going in with the header as well, will allow us to parse the upload progress and bring it to be displayed in our progress component
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
          console.log('in axios/post to server');
          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
          //clear out last file name uploaded 
          setTimeout(() => setFilename(''), 10000);
        }
      });
      console.log('response:', res.data);
      const { fileName, filePath } = res.data;
      //these are setting state via hooks, this is how we do it in a functional component
      setUploadedFile({ fileName, filePath });
      setMessage('File Uploaded');
      //a good server knows to send errors and a good programer will catch them!
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };


  return (
    <>
    <h3 className='text-center' >image will be saved to server</h3>
    <p className='text-center' >written in function component</p>
    <p className='text-center' >no redux used, only will display last image uploaded</p>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
    </>
  );
};



export default FileUpload;
