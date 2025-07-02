// frontend/src/pages/TrainerTrainee.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TrainerTrainee.css'; // optional: create this for styling

const TrainerTrainee = () => {
  const [code, setCode] = useState('');
  const [role, setRole] = useState('trainee');
  const [video, setVideo] = useState(null);
  const [report, setReport] = useState('');
  const [grade, setGrade] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

 const handleLink = async () => {
  try {
    const res = await axios.post('https://s84-ashishyadav-capstone-cricguide-1.onrender.com/api/trainertrainee/link', { code, role });
    alert(res.data.message);

    // 🔁 If trainer, fetch trainee's video
    if (role === 'trainer') {
      const videoRes = await axios.get(`  av-capstone-cricguide-1.onrender.com/api/trainertrainee/video/${code}`);
      setVideoUrl(videoRes.data.videoUrl);
    }
  } catch (err) {
    alert('Linking failed');
  }
};

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', video);
    formData.append('code', code);
    try {
      await axios.post('https://s84-ashishyadav-capstone-cricguide-1.onrender.com/api/trainertrainee/upload', formData);
      alert('Video uploaded');
    } catch {
      alert('Upload failed');
    }
  };

  const handleReport = async () => {
    try {
      await axios.post('https://s84-ashishyadav-capstone-cricguide-1.onrender.com/api/trainertrainee/report', { code, report, grade });
      alert('Report submitted');
    } catch {
      alert('Report failed');
    }
  };

  useEffect(() => {
    const fetchVideo = async () => {
      if (role === 'trainer' && code) {
        try {
          const res = await axios.get(`https://s84-ashishyadav-capstone-cricguide-1.onrender.com/api/trainertrainee/video/${code}`);
          setVideoUrl(res.data.videoUrl);
        } catch {
          setVideoUrl('');
          console.log('No video found');
        }
      }
    };

    fetchVideo();
  }, [role, code]);

  return (
    <div className="trainer-trainee-container">
      <h2>Trainer-Trainee Portal</h2>

      <input value={code} onChange={e => setCode(e.target.value)} placeholder="Enter Unique Code" />
      <select onChange={e => setRole(e.target.value)} value={role}>
        <option value="trainee">Trainee</option>
        <option value="trainer">Trainer</option>
      </select>
      <button onClick={handleLink}>Link</button>

      {role === 'trainee' && (
        <form onSubmit={handleUpload}>
          <input type="file" onChange={e => setVideo(e.target.files[0])} required />
          <button type="submit">Upload Video</button>
        </form>
      )}

      {role === 'trainer' && (
        <div className="trainer-actions">
          <textarea placeholder="Progress Report" value={report} onChange={e => setReport(e.target.value)} />
          <input placeholder="Grade" value={grade} onChange={e => setGrade(e.target.value)} />
          <button onClick={handleReport}>Submit Report</button>

          {role === 'trainer' && videoUrl && (
  <div className="trainer-video">
    <h3>Trainee's Uploaded Video:</h3>
    <video controls width="100%">
      <source src={`https://s84-ashishyadav-capstone-cricguide-1.onrender.com/${videoUrl}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
)}
        </div>
      )}
    </div>
  );
};

export default TrainerTrainee;
