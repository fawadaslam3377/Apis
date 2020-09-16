const express = require("express");
const router = express.Router();

const Auth = require("../middlewares/AuthMiddleware");

const GenreController = require("../controllers/GenreController");

router.get("/", GenreController.getAllGenre);
router.get("/:Id", GenreController.getGenre);
router.patch("/:Id", GenreController.editGenre);
router.delete("/:Id", GenreController.deleteGenre);
router.post("/", GenreController.addGenre);
module.exports = router;
