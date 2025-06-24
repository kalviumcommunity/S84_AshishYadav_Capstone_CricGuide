import React from 'react';
import VideoCarousel from './VideoCarousel';

const BattingProfessional = () => {
  const videoIds = ['RxNQpId7Nw0', '5INjpGd5LMw', '4uQqImEccsQ', 'A5xq_4C0kVk', '4OdfG-LPOMc', 'RiZ7sSeldmw', '08rBxhFjcS0', 'quvpwDBViFg']; // Replace with real YouTube video IDs

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Batting - Intermediate</h2>
      <VideoCarousel videoIds={videoIds} />
    </div>
  );
};

export default BattingProfessional;
