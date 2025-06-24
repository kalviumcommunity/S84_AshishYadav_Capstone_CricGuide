import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyDnzp7k8cMV8kJ4t-oCLiLADHdXSggUGQw&s",
  "https://www.ipl.com/upload/20250227/7e958373c58920e8e43f2f11f638a308.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMxCKjz_VW0aZs4u-VtgXjmPeZKwxTpmtqg&s",
  "https://playingwithastraightbat.wordpress.com/wp-content/uploads/2012/01/matthew-hayden-001.jpg",
  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/386800/386859.jpg",
  "https://crictoday.com/wp-content/uploads/2024/06/abd987.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KWRmUKd_cKl3sutM1cvk6cqfvDdVVL1qlQ&s"
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="left-content">
        <h1>CRICGUIDE</h1>
        <p>Learn the game of gentlemen online now</p>
        <Link to="/login" className="btn">LOGIN</Link>
        <Link to="/signup" className="btn">SIGNUP</Link>
      </div>

      <div className="right-content">
        <h3>Learn from the bests</h3>
        <div className="carousel-placeholder">
          <img
            src={images[prevIndex]}
            alt="previous"
            className="carousel-image faded"
            onClick={prevImage}
          />
          <img
            src={images[index]}
            alt="current"
            className="carousel-image current"
          />
          <img
            src={images[nextIndex]}
            alt="next"
            className="carousel-image faded"
            onClick={nextImage}
          />
        </div>
        <Link to="/learn" className="btn">START LEARNING →</Link>
      </div>
    </div>
  );
}
