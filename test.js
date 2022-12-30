const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.set('strictQuery', false);
//Connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {

})

//Create schema
const PhotoSchema = new Schema({
    title: String,
    description: String,
})

//Create model
const Photo = mongoose.model('Photo', PhotoSchema)

//Create a photo
// Photo.create({
//     title: "Photo Title 2",
//     description: "Photo 2 description lorem ipsum"
// });

//Read a photo
// Photo.find({}, (err, data) => {
//     console.log(data);
// });

//Add photo
const id = "63aec665a83d6d11599031a4";

// Photo.findByIdAndUpdate(
//     id, {
//     title: "Photo Title 111 updated",
//     description: "Photo description 111 updated"
// },
//     {
//         new: true
//     },
//     (err, data) => {
//         console.log(data);
//     }
// );

//Delete a photo
Photo.findByIdAndDelete(id, (err, data) => {
    console.log('Photo is removed.');
})