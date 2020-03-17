const mongoose = require('mongoose');
const Schema = mongoose.Schema;


mongoose.Promise = global.Promise;

let Image_Upload = new Schema({
    image_name: {
        type: String
    },
    image_mimetype: {
        type: String
    },
    image_image: {
         type: Buffer, contentType: String
    },
    image_date: {
        type: Date, default: Date.now 
   }
});


module.exports = mongoose.model('NewImage', Image_Upload);