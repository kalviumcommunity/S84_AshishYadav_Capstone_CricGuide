import React from 'react';
import VideoCarousel from './VideoCarousel';

const BowlingIntermediate = () => {
  const videoIds = ['DuSUC481fx0', '3qtDWt3iBnc', 'JqNyXxXJRWc', '0kH_QwWtF7U']; // Replace with real YouTube video IDs

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Batting - Intermediate</h2>
      <VideoCarousel videoIds={videoIds} />
    </div>
  );
};

export default BowlingIntermediate;
