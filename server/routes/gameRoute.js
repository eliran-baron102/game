const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController')

router.get('/getAllGames', gameController.getAllGames);
router.get('/getGamebyId', gameController.getGamebyId);


module.exports = router;