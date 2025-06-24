import React from 'react';
import VideoCarousel from './VideoCarousel';

const FieldingIntermediate = () => {
  const videoIds = ['JSJ6oFjnVF0', 'jVfKughYf6U', 'W3JM_kXQmoM', 'IrXJ-6so8AU']; // Replace with real YouTube video IDs

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Batting - Intermediate</h2>
      <VideoCarousel videoIds={videoIds} />
    </div>
  );
};

export default FieldingIntermediate;
