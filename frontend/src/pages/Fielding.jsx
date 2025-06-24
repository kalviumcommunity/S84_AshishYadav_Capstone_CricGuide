import React from 'react';
import { Link } from 'react-router-dom';
import './SkillSection.css';

const Fielding = () => {
  return (
    <div className="skill-container">
      <h2 className="skill-title">Fielding Section</h2>
      <img
        className="skill-image"
        src="https://www.ausleisure.com.au/images/ausleisure/files/Cricket_catch_fielding_Shutterstock_2.jpg"
        alt="Fielding"
      />
      <p className="skill-description">
        Improve your fielding agility and accuracy. Learn techniques for catching, ground fielding, throwing,
        positioning, and reflex training. This module helps you become a dependable fielder in any format.
      </p>
      <div className="level-links">
        <Link to="/learn/fielding/beginner" className="level-button">Beginner</Link>
        <Link to="/learn/fielding/intermediate" className="level-button">Intermediate</Link>
        <Link to="/learn/fielding/professional" className="level-button">Professional</Link>
      </div>
    </div>
  );
};

export default Fielding;
