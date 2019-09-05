// == Import : npm
import React from 'react';

// == Import : local
import './skills.scss';

// == Composant
const Skills = () => (
  <div id="skills">
    <div className="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-front">
        <h3 className="skills-front-header">Front-End</h3>
        <ul className="skills-front-ul">
          <li className="skills-front-ul-list">HTML/CSS</li>
          <li className="skills-front-ul-list">React/Redux</li>
          <li className="skills-front-ul-list">Javascript/JQuery</li>
          <li className="skills-front-ul-list"></li>
          <li className="skills-front-ul-list"></li>
          <li className="skills-front-ul-list"></li>
          <li className="skills-front-ul-list"></li>
        </ul>
      </div>
    </div>
  </div>
);

// == Export
export default Skills;
