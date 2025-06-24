import React from 'react';
import { Link } from 'react-router-dom';
import './Learn.css';

const Learn = () => {
  return (
    <div className="learn-container">
      <h2>Welcome to the Learning Section!</h2>
      <p>Choose your skill area and start improving your cricket game.</p>

      <div className="cards">
        <Link to="/learn/batting" className="card">
          <img
            src="https://australiansportscamps.com.au/cdn/shop/articles/Front-Foot-Batting-Video-Tutorial-1.jpg?v=1715916659"
            alt="Batting"
            className="card-image"
          />
          <h3>🏏 Batting</h3>
          <p>Learn stance, shots, footwork & mindset.</p>
        </Link>

        <Link to="/learn/bowling" className="card">
          <img
            src="https://pbs.twimg.com/media/DfEQi-1U8AEdyB3.jpg:large"
            alt="Bowling"
            className="card-image"
          />
          <h3>🎯 Bowling</h3>
          <p>Master pace, spin, accuracy & technique.</p>
        </Link>

        <Link to="/learn/fielding" className="card">
          <img
            src="https://www.ausleisure.com.au/images/ausleisure/files/Cricket_catch_fielding_Shutterstock_2.jpg"
            alt="Fielding"
            className="card-image"
          />
          <h3>🧤 Fielding</h3>
          <p>Sharpen your catching, throwing & agility.</p>
        </Link>
      </div>
    </div>
  );
};

export default Learn;
