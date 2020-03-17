 const express = require('express');
 const router = express.Router();
 const Image_Upload = require('../modules/image.schema');
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const Product = mongoose.model('products');


// mongoose.Promise = global.Promise;

//get all images from mongoDB
router.get('/', (req,res)=>{
    console.log('in mongo get');
    Image_Upload.find(function(err, image) {
        if (err) {
            console.log(err);
        } else {
            res.json(image);
        }
    });
  })

//post a new image to mongoDB
router.post('/', (req,res)=>{
    console.log('in mongo post with:', req.body);
    let image = new Image_Upload(req.body);
    image.save()
        .then(image => {
            res.status(200).json({'NewImage': 'image added successfully!'});
        })
        .catch(err => {
            res.status(400).send('adding new image failed...', err);
        });
});


//need a lot more updating on this route!

//ill add in more info more info as i learn how to use mongo DB!



 module.exports = router;


////////  example of get using id param   ////////
//  router.get('/:id', (req,res)=>{
//     let id = req.params.id;
//     Image_Upload.findById(id, function(err, Image_Upload) {
//         res.json(Image_Upload);
//     });
// });


////// example of put ////////////////
// roter.put('/:id', (req,res)=>{
//     Image_Upload.findById(req.params.id, function(err, image) {
//         if (!image)
//             res.status(404).send("image data is not found");
//         else
//             image.image_name = req.body.image_name;
//             image.image_mimetype = req.body.image_mimetype;
//             image.image_image = req.body.image_image;

//             image.save().then(image => {
//                 res.json('Image updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("Update image not possible...", err);
//             });
//     });
// });