import React from 'react';
import VideoCarousel from './VideoCarousel';

const FieldingProfessional = () => {
  const videoIds = ['AyUzzSluFV0', 'pyjZ-9eO5FI', 'J6CM-d6R5SQ']; // Replace with real YouTube video IDs

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Batting - Intermediate</h2>
      <VideoCarousel videoIds={videoIds} />
    </div>
  );
};

export default FieldingProfessional;
