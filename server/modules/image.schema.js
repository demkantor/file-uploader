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
    image_date: {
         type: Date, default: Date.now 
    },
    image_image: {
         data: Buffer
    }
});

module.exports = mongoose.model('NewImage', Image_Upload);