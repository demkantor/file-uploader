const express = require('express');
const router = express.Router();




// Upload new image post - send to file in server, this is as basic as it gets but good to compare with our other routes
router.post('/', (req, res) => {
    console.log('in /api/image/POST with:', req.files.file.name);
    //checks to make sure we have a file coming in, could also check for other things like file type or file size here if needed
    if (req.files === null) {
      //allows us to send a status and a json object to read!!!!
      return res.status(400).json({ msg: 'No file uploaded' });
    }
    //moves image to public/uploads stored in server
    const file = req.files.file;
    file.mv(`./public/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });





module.exports = router;