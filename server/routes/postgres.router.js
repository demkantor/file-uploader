const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// Upload new image post - send to image and info to postgres
router.post('/', (req, res) => {
    console.log('in /api/postgres/POST with:', req.files.file.name);
    //checks to make sure there is a file coming, could put in other checks here such as image type or file size if needed
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
    //packages info to be sent to postgres
    const file = req.files.file;
    const queryText = `INSERT INTO "uploaded_images" ("data", "name", "mime_type") VALUES ($1, $2, $3)`;
    pool.query(queryText, [file.data, file.name, file.mimetype])
    //i found some fun ways of sending info back to redux, we get both the "ok" status and a jason object this way!
    .then(() => { res.status(201).json({ name: file.name, fileType: file.mimetype, image: file.data }); })
    .catch((err) => {
      console.log('Error completing new postgres post', err);
      res.sendStatus(500);
    });
  });

  //sends array of images saved to server from our postgres database
  router.get('/', (req,res)=>{
    //the encode query will make it so data coming in will be readable by react as its not stored in postgres in a way we can easy read like varchar or int
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