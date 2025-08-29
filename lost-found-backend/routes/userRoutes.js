const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUserById } = require('../controllers/userController.js');

// Register Route
router.post('/register', createUser);

// Login Route
router.post('/login', loginUser);

// Get User by ID Route
router.get('/:id', getUserById);

module.exports = router;
