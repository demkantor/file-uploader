const express = require('express');
const router = express.Router();
//image will be store on server in public/uploads
//this array will store info on what images are there so long as server is up
//array will empty when server is down/refreshes but images will persist in folder
imageArray =[]



// Upload new image post - send to file in server
router.post('/', (req, res) => {
    console.log('in /api/router/POST with:', req.files.file.name, 'full file:', req.files.file);
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
    //pakages up info to send back to redux
    const objectToPush = {fileName: req.files.file.name, filePath: `/uploads/${req.files.file.name}`}
    imageArray.push(objectToPush);
    const file = req.files.file;
    //moves image to folder on server
    file.mv(`./public/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      //just like res.send but here we are sending json object to be read in redux
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });

  //sends array of images saved to server
  router.get('/', (req,res)=>{
    res.send(imageArray);
  })



module.exports = router;