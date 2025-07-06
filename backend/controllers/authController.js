const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    console.log('🟢 /register endpoint hit');
    const { name, email, password } = req.body;
    console.log('📨 Received registration data:', { name, email });

    if (!name || !email || !password) {
      console.log('❌ Missing required fields');
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('⚠️ User already exists:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('🔐 Password hashed');

    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    console.log('✅ User saved:', user.email);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    console.log('🔑 JWT token generated');

    res.status(201).json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error('❌ Register Error:', err.message);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    console.log('🟢 /login endpoint hit');
    const { email, password } = req.body;
    console.log('📨 Received login data:', { email, password });

    if (!email || !password) {
      console.log('❌ Missing email or password');
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log('❌ User not found:', email);
      return res.status(400).json({ message: 'Invalid credentials (user not found)' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('❌ Incorrect password for:', email);
      return res.status(400).json({ message: 'Invalid credentials (wrong password)' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    console.log('✅ Login successful for:', user.email);

    res.status(200).json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error('❌ Login Error:', err.message);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};
