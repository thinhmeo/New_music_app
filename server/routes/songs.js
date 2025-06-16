const express = require("express");
const router = express.Router();
const songController = require("../controllers/songController");

router.post("/save", songController.createSong);
router.get("/getAll", songController.getAllSongs);
router.get("/getOne/:id", songController.getSongById);
router.put("/update/:id", songController.updateSong);
router.delete("/delete/:id", songController.deleteSong);
router.get("/getByArtist/:artistName", songController.getSongsByArtist);

module.exports = router;