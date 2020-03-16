const express = require('express');
const router = express.Router();
imageArray =[]



// Upload new image post - send to file in server
router.post('/', (req, res) => {
    console.log('in /api/router/POST with:', req.files.file.name, 'full file:', req.files.file);
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
    const objectToPush = {fileName: req.files.file.name, filePath: `/uploads/${req.files.file.name}`}
    imageArray.push(objectToPush);
    const file = req.files.file;
    file.mv(`./public/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });

  //sends array of images saved to server
  router.get('/', (req,res)=>{
    res.send(imageArray);
  })



module.exports = router;