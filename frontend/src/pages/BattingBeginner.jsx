import React from 'react';
import VideoCarousel from './VideoCarousel';

const BattingBeginner = () => {
  const videoIds = ['Q8WXoX2p3Ac', 'kVo-nyX2gDw', 'yZFdpE-ybbA', 'L-RFkihQ1WY', 'QoGBqixiqr8', 'hKdl0zuqXvw']; // Replace with real YouTube video IDs

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Batting - Intermediate</h2>
      <VideoCarousel videoIds={videoIds} />
    </div>
  );
};

export default BattingBeginner;
