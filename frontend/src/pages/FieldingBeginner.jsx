import React from 'react';
import VideoCarousel from './VideoCarousel';

const FieldingBeginner = () => {
  const videoIds = ['6GlrVz09_b0', 'XZ8hJt99M4I', 'XFU5UitrO48', 'VsLuzCLbVIs']; // Replace with real YouTube video IDs

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Batting - Intermediate</h2>
      <VideoCarousel videoIds={videoIds} />
    </div>
  );
};

export default FieldingBeginner;
