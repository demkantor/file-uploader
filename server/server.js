const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const app = express();
const { Client } = require('pg');
const mongoose = require('mongoose');
const cors = require('cors')
const port = process.env.PORT || 5000;



/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); ////for mongoDB
app.use(fileUpload())  ;//to parse the files


// Route includes
const imageRouter = require('./routes/image.router');
const reduxRouter = require('./routes/redux.router');
const postgresRouter = require('./routes/postgres.router');
const mongoRouter = require('./routes/mongo.router');   ///// disconnecting this for now untill i figure out mongo db more



// Serve static files
app.use(express.static('build'));


/** ---------- ROUTES ---------- **/
app.use('/api/image', imageRouter);
app.use('/api/redux', reduxRouter);
app.use('/api/postgres', postgresRouter);
app.use('/api/mongo', mongoRouter);   ///// disconnecting this for now untill i figure out mongo db more

/** ---send postgres connection test to console -- **/
//this was somethign cool i found, i have a username and password connected to my database (also found in pool.js)
//comment the user name and password out if you dont use one or replace it with what you use! (here and in pool.js (in second config section))
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'con',
  password: 'secretpass',
})
client
  .connect()
  .then(() => console.log('postgres database connected....'))
  .catch(err => console.error('connection error', err.stack))


/** ---send mongoose connection test to console -- **/
//similar to the above with postgress, establishes connection to database and console logs if its working
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/file_upload_test`, {useUnifiedTopology: true, useNewUrlParser: true });
  const connection = mongoose.connection;
  connection.once('open', function() {
    console.log("MongoDB database connected...");
})


/** ---------- START SERVER ---------- **/
/** Listen * */
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});



// Upload Endpoint - not needed if moved to routers! ////////
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




