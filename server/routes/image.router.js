const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



// Upload new image post - send to file in server
router.post('/', (req, res) => {
    console.log('in /api/image/POST with:', req.files.file.name);
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
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