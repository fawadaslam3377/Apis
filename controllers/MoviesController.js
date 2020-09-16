const Movies = require("../models/MoviesModel");
const BaseController = require("./BaseController");

module.exports.getAllMovies = BaseController.get(Movies);

module.exports.getMovies = BaseController.getById(Movies);

module.exports.editMovies = BaseController.update(Movies);

module.exports.deleteMovies = BaseController.remove(Movies);

module.exports.addMovies = BaseController.add(Movies);
