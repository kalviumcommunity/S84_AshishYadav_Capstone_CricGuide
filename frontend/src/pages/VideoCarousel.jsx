import React, { useState, useEffect } from 'react';
import EmbeddedVideo from '../components/EmbeddedVideo';
import './VideoCarousel.css';

const VideoCarousel = ({ videoIds }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoIds.length);
    }, 5000); // Rotate every 10 seconds

    return () => clearInterval(interval);
  }, [videoIds.length]);

  return (
    <div className="carousel-container">
      <EmbeddedVideo videoId={videoIds[currentIndex]} />
    </div>
  );
};

export default VideoCarousel;
