const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const app = express();
const { Client } = require('pg')
const port = process.env.PORT || 5000;


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


// Route includes
const imageRouter = require('./routes/image.router');
const reduxRouter = require('./routes/redux.router');
const postgresRouter = require('./routes/postgres.router');


// Serve static files
app.use(express.static('build'));


/** ---------- ROUTES ---------- **/
app.use('/api/image', imageRouter);
app.use('/api/redux', reduxRouter);
app.use('/api/postgres', postgresRouter);

/** ---send postgres connection test to console -- **/
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'con',
  password: 'secretpass',
})
client
  .connect()
  .then(() => console.log('database connected....'))
  .catch(err => console.error('connection error', err.stack))

// Upload Endpoint - not needed if moved to routers!
// app.post('/upload', (req, res) => {
//   console.log('in /upload/POST');
//   if (req.files === null) {
//     return res.status(400).json({ msg: 'No file uploaded' });
//   }
//   const file = req.files.file;
//   file.mv(`./public/uploads/${file.name}`, err => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }

//     res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//   });
// });



/** ---------- START SERVER ---------- **/
/** Listen * */
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
