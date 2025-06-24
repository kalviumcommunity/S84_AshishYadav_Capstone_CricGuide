import React from 'react';
import VideoCarousel from './VideoCarousel';

const BattingIntermediate = () => {
  const videoIds = ['YbztHt1ZY', '8AaBCJQ3fTA', 'HEHggOOds1w', 'yz_NFfAxLbQ', 'eyZM9Leg_aM', 'sPDMyxqPw_Y']; // Replace with real YouTube video IDs

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Batting - Intermediate</h2>
      <VideoCarousel videoIds={videoIds} />
    </div>
  );
};

export default BattingIntermediate;