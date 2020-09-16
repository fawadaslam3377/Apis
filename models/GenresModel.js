const mongoose = require("mongoose");

const genresSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 6, maxlength: 30 },
  description: { type: String, required: true, minlength: 6, maxlength: 30 },
});

module.exports = mongoose.model("Genre", genresSchema);
