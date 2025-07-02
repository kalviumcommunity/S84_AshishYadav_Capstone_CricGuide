const express = require('express');
const router = express.Router();
const TrainerTrainee = require('../models/TrainerTraineeModel');
const multer = require('multer');

// Storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // ensure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // rename file with timestamp
  }
});
const upload = multer({ storage: storage });

router.post('/link', async (req, res) => {
  const { code, role } = req.body;
  try {
    let existing = await TrainerTrainee.findOne({ code });
    if (!existing) {
      existing = new TrainerTrainee({ code });
      await existing.save();
    }
    res.json({ message: `${role} linked successfully` });
  } catch {
    res.status(500).json({ message: 'Linking failed' });
  }
});

router.post('/upload', upload.single('video'), async (req, res) => {
  const { code } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const existing = await TrainerTrainee.findOneAndUpdate(
      { code },
      { videoUrl: `uploads/${req.file.filename}` },
      { upsert: true, new: true }
    );
    res.json({ message: 'Video uploaded', data: existing });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Upload failed' });
  }
});

router.post('/report', async (req, res) => {
  const { code, report, grade } = req.body;
  try {
    await TrainerTrainee.findOneAndUpdate({ code }, { report, grade }, { upsert: true });
    res.json({ message: 'Report submitted successfully' });
  } catch {
    res.status(500).json({ message: 'Report failed' });
  }
});

router.get('/video/:code', async (req, res) => {
  try {
    const record = await TrainerTrainee.findOne({ code: req.params.code });
    if (record?.videoUrl) {
      res.json({ videoUrl: record.videoUrl });
    } else {
      res.status(404).json({ message: 'No video found for this code' });
    }
  } catch {
    res.status(500).json({ message: 'Error retrieving video' });
  }
});


module.exports = router;
