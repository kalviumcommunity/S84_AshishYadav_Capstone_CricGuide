import React from 'react';
import VideoCarousel from './VideoCarousel';

const BowlingBeginner = () => {
  const videoIds = ['CKAcTv44www', 'LxG36bHrc2o', 'Tm0amHkl16M', '2BCva3DcByw', 'URshdJ2mFJU', 'Ps8qw0oMLIA']; // Replace with real YouTube video IDs

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Batting - Intermediate</h2>
      <VideoCarousel videoIds={videoIds} />
    </div>
  );
};

export default BowlingBeginner;
