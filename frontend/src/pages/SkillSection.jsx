import React from 'react';
import { Link } from 'react-router-dom';
import './SkillSection.css';

const SkillSection = () => {
  return (
    <div className="skill-section">
      <Link to="/batting" className="skill-card">
        <img src="https://australiansportscamps.com.au/cdn/shop/articles/Front-Foot-Batting-Video-Tutorial-1.jpg?v=1715916659" alt="Batting" />
        <h3>Batting</h3>
      </Link>

      <Link to="/bowling" className="skill-card">
        <img src="https://pbs.twimg.com/media/DfEQi-1U8AEdyB3.jpg:large" alt="Bowling" />
        <h3>Bowling</h3>
      </Link>

      <Link to="/fielding" className="skill-card">
        <img src="https://www.ausleisure.com.au/images/ausleisure/files/Cricket_catch_fielding_Shutterstock_2.jpg" alt="Fielding" />
        <h3>Fielding</h3>
      </Link>
    </div>
  );
};

export default SkillSection;
