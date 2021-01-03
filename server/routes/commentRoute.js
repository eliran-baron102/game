const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController')

router.get('/insertComment', commentController.insertComment);
router.get('/getAllCommentsByGameId', commentController.getAllCommentsByGameId);


module.exports = router;