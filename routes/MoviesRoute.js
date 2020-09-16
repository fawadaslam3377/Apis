const express = require("express");

const fs = require("fs");

const router = express.Router();

const Auth = require("../middlewares/AuthMiddleware");

const MoviesController = require("../controllers/MoviesController");

router.get("/", MoviesController.getAllMovies);
router.get("/:Id", MoviesController.getMovies);
router.patch("/:Id", MoviesController.editMovies);
router.delete("/:Id", MoviesController.deleteMovies);
router.post("/", MoviesController.addMovies);

module.exports = router;
