const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// Upload new image post - send to file in server
router.post('/', (req, res) => {
    console.log('in /api/postgres/POST with:', req.files.file.name);
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
    const file = req.files.file;
    const queryText = `INSERT INTO "uploaded_images" ("data", "name", "mime_type") VALUES ($1, $2, $3)`;
    pool.query(queryText, [file.data, file.name, file.mimetype])
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing new postgres post', err);
      res.sendStatus(500);
    });
  });

  //sends array of images saved to server
  router.get('/', (req,res)=>{
    const queryText = `SELECT ENCODE(data, 'base64') as image, "name", "mime_type", "id" FROM "uploaded_images";`;
    pool.query(queryText)
    .then( (result) => {
        res.send(result.rows);
    })
    .catch( (error) => {
        console.log(`Error on combo query ${error}`);
        res.sendStatus(500);
    });
  })



module.exports = router;