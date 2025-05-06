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
  

router.put('/users/:id', protect, async (req, res) => {

  try {
    const userId = req.params.id;

    // Optional: Check if the ID matches the logged-in user's ID for security
    if (req.user.id !== userId) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true, runValidators: true }
    ).select('-password'); // exclude password from the response

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error('Error updating user:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json(updatedUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }

});

router.post('/signup', register);
router.post('/login', login);

module.exports = router
