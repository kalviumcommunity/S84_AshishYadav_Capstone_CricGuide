const express = require('express');
const { register, login } = require('../controllers/authController');
const User = require('../models/user');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();


router.get('/users', protect, async (req, res) => {
    try {
      const users = await User.find().select('-password');
      res.status(200).json(users);
    } catch (err) {
      console.error('Error fetching users:', err.message);
      res.status(500).json({ message: 'Server Error' });
    }
});
  

router.post('/signup', register);
router.post('/login', login);

module.exports = router;
