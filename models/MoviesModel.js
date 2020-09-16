const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 6, maxlength: 30 },
  description: { type: String, required: true, minlength: 6, maxlength: 300 },
  duration: { type: String, required: true, minlength: 6, maxlength: 30 },
  rating: { type: String, required: true, minlength: 6, maxlength: 30 },
  releaseDate: { type: Date, required: true, minlength: 6, maxlength: 30 },
  genre: { type: String, required: true, minlength: 6, maxlength: 30 },
});

module.exports = mongoose.model("Movies", moviesSchema);
