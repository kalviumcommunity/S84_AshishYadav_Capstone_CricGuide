import React from 'react';
import { Link } from 'react-router-dom';
import './SkillSection.css';

const Batting = () => {
  return (
    <div className="skill-container">
      <h2 className="skill-title">Batting Section</h2>
      <img
        className="skill-image"
        src="https://australiansportscamps.com.au/cdn/shop/articles/Front-Foot-Batting-Video-Tutorial-1.jpg?v=1715916659"
        alt="Batting"
      />
      <p className="skill-description">
        Improve your grip, stance, timing, footwork, and shot selection. Learn from expert tutorials and drills designed for all levels.
      </p>
      <div className="level-links">
        <Link to="/learn/batting/beginner" className="level-button">Beginner</Link>
        <Link to="/learn/batting/intermediate" className="level-button">Intermediate</Link>
        <Link to="/learn/batting/professional" className="level-button">Professional</Link>
      </div>
    </div>
  );
};

export default Batting;