import mongoose from "mongoose";

const { Schema } = mongoose;

const movieSchema = new Schema({
    poster: String,
    title: String,
    year: String,
    seen: String,
    comment: String,
    genre: String,
})

module.exports = mongoose.model('Movies', movieSchema);

export default movieSchema;

