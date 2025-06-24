import React from 'react';
import VideoCarousel from './VideoCarousel';

const BowlingProfessional = () => {
  const videoIds = ['jmwh3bM1Ri8', 'BgFRNUNU17o', 'CaHITuNpCnA', 'CM3gyPc0P-c', 'pB_vJVrPQVw']; // Replace with real YouTube video IDs

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Batting - Intermediate</h2>
      <VideoCarousel videoIds={videoIds} />
    </div>
  );
};

export default BowlingProfessional;
