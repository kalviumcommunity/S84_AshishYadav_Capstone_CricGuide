const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['text', 'video', 'tips'], required: true },
  url: { type: String },
  skillLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Professional'], required: true },
  category: { type: String, enum: ['Batting', 'Bowling', 'Fielding'], required: true },
}, 
{
     timestamps: true 
});

module.exports = mongoose.model('Content', ContentSchema);
