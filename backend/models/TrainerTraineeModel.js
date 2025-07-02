const mongoose = require('mongoose');

const trainerTraineeSchema = new mongoose.Schema({
  code: String,
  videoUrl: String,
  report: String,
  grade: String
});

module.exports = mongoose.model('TrainerTrainee', trainerTraineeSchema);