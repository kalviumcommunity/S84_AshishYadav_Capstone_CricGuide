const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log('Received data for registration:', { name, email });
  
      if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = new User({
        name,
        email,
        password: hashedPassword,
      });
  
      await user.save();
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
  
      res.status(201).json({
        token,
        user: { id: user._id, name: user.name, email: user.email },
      });
    } catch (err) {
      console.error('Register Error:', err.message);
      res.status(500).json({ message: 'Server Error', error: err.message });
    }
  };
  
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log('Login attempt for:', email);
  
      if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials (user not found)' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials (wrong password)' });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
  
      res.status(200).json({
        token,
        user: { id: user._id, name: user.name, email: user.email },
      });
    } catch (err) {
      console.error('Login Error:', err.message);
      res.status(500).json({ message: 'Server Error', error: err.message });
    }
  };
  