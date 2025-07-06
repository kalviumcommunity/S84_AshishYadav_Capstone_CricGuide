const express = require('express');
const User = require('../models/user');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// GET all users (Protected)
router.get('/', protect, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// UPDATE user by ID (Protected)
router.put('/:id', protect, async (req, res) => {
  try {
    const userId = req.params.id;
    if (req.user.id !== userId) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true, runValidators: true }
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error('Error updating user:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
