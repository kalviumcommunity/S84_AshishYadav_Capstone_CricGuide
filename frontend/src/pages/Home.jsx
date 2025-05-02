import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-content">
        <h1>CRICGUIDE</h1>
        <p>Learn the game of gentlemen online now</p>
        <Link to="/login" className="btn">LOGIN  </Link>
        <Link to="/signup" className="btn">SIGNUP</Link>
      </div>

      <div className="right-content">
        <h3>Learn from the bests</h3>
        <div className="carousel-placeholder">
          <span>&larr;</span>
          <div className="center-box"></div>
          <span>&rarr;</span>
        </div>
        <Link to="/learn" className="btn">START LEARNING →</Link>
      </div>
    </div>
  );
};

export default Home;
