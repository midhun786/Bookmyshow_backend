const mongoose = require('mongoose');

//create Movie schema
const MoviesSchema = mongoose.Schema({
    imageUrl: String,
    title: String,
    actor: String
});

const MoviesModel = mongoose.model("movies", MoviesSchema);

module.exports = MoviesModel;