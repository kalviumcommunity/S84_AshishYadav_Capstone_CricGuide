const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skillLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Professional'] },
  interest: { type: String, enum: ['Batting', 'Bowling', 'Fielding'] },
  referralCode: { type: String },
  referredBy: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
