const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/user.controller');

// get all users
router.get('/', UsersController.getUsersList);

module.exports = router;