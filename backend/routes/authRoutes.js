const express = require('express');
const { register, login } = require('../controllers/authController');
const User = require('../models/user');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();



router.post('/signup', register);
router.post('/login', login);

module.exports = router;
