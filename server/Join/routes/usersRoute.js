const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/getAllUsers', usersController.getAllUsers);
router.get('/getUserById', usersController.getUserById);
router.post('/insertUser', usersController.insertUser);
router.get('/deleteUser', usersController.deleteUser);
router.post('/updateUser', usersController.updateUser);


module.exports = router;

