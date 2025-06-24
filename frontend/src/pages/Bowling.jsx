import React from 'react';
import { Link } from 'react-router-dom';
import './SkillSection.css';

const Bowling = () => {
  return (
    <div className="skill-container">
      <h2 className="skill-title">Bowling Section</h2>
      <img
        className="skill-image"
        src="https://plus.unsplash.com/premium_photo-1661869633641-cafd3928b095?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JpY2tldCUyMGJvd2xpbmd8ZW58MHx8MHx8fDA%3D"
        alt="Bowling"
      />
      <p className="skill-description">
        Enhance your bowling skills with focused training. Learn about swing, spin, pace, variations, and line-length control.
        Get tips from top bowlers and apply advanced drills to become a wicket-taking machine.
      </p>
      <div className="level-links">
        <Link to="/learn/bowling/beginner" className="level-button">Beginner</Link>
        <Link to="/learn/bowling/intermediate" className="level-button">Intermediate</Link>
        <Link to="/learn/bowling/professional" className="level-button">Professional</Link>
      </div>
    </div>
  );
};

export default Bowling;