exports.linkUsers = (req, res) => {
  const { code, role } = req.body;
  // Ideally, save this linking in DB.
  res.json({ message: `Successfully linked as ${role}` });
};

exports.uploadVideo = (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
  // Save file info to DB with code reference
  res.json({ message: 'Video uploaded successfully' });
};

exports.submitReport = (req, res) => {
  const { code, report, grade } = req.body;
  // Save report in DB with code reference
  res.json({ message: 'Report submitted successfully' });
};
