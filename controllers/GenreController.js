const Genre = require("../models/GenresModel");
const BaseController = require("./BaseController");

module.exports.getAllGenre = BaseController.get(Genre);

module.exports.getGenre = BaseController.getById(Genre);

module.exports.editGenre = BaseController.update(Genre);

module.exports.deleteGenre = BaseController.remove(Genre);

module.exports.addGenre = BaseController.add(Genre);
