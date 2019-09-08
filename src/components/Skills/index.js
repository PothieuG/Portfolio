// == Import : npm
import React from 'react';

// == Import : local
import './skills.scss';

// == Composant
const Skills = () => (
  <div id="skills">
    <div className="skills">
      <h2 className="skills-title" data-aos="fade-right">My Skills</h2>
      <div className="skills-front">
        <h3 className="skills-front-header" data-aos="fade">Front-End</h3>
        <ul className="skills-front-ul">
          <li className="skills-front-ul-list">HTML/CSS</li>
          <li className="skills-front-ul-list">React/Redux</li>
          <li className="skills-front-ul-list">Javascript/JQuery</li>
          <li className="skills-front-ul-list">Frameworks: <span className="skills-front-ul-list-frameworks">Boostrap, ANTD, Semantic UI, Materialize...</span></li>
        </ul>
      </div>
      <div className="skills-back" data-aos="fade">
        <h3 className="skills-back-header">Back-End</h3>
        <ul className="skills-back-ul">
          <li className="skills-back-ul-list">PHP/MyAdmin</li>
          <li className="skills-back-ul-list">MySQL</li>
          <li className="skills-back-ul-list">Laravel</li>
          <li className="skills-back-ul-list">MongoDB/Mongoose</li>
          <li className="skills-back-ul-list">Node.js</li>
        </ul>
      </div>
      <div className="skills-cms" data-aos="fade">
        <h3 className="skills-cms-header">CMS</h3>
        <ul className="skills-cms-ul">
          <li className="skills-cms-ul-list">Wordpress</li>
        </ul>
      </div>
      <div className="skills-frameworks" data-aos="fade" data-aos-offset="50">
        <h3 className="skills-frameworks-header">Frameworks & Tools</h3>
        <ul className="skills-frameworks-ul">
          <li className="skills-frameworks-ul-list">Ajax</li>
          <li className="skills-frameworks-ul-list">Axios</li>
          <li className="skills-frameworks-ul-list">Express.js</li>
          <li className="skills-management-ul-list">MVC/MCS</li>
          <li className="skills-management-ul-list">Mocodo</li>
          <li className="skills-management-ul-list">Whimsical</li>
          <li className="skills-frameworks-ul-list">LAMP environment</li>
          <li className="skills-frameworks-ul-list">Git/GitHub</li>
          <li className="skills-frameworks-ul-list">LAMP environment</li>
        </ul>
      </div>
      <div className="skills-management" data-aos="fade" data-aos-offset="50">
        <h3 className="skills-management-header">Management</h3>
        <ul className="skills-management-ul">
          <li className="skills-management-ul-list">Agiles Method</li>
          <li className="skills-management-ul-list">SCRUM</li>
          <li className="skills-management-ul-list">Kanban</li>
          <li className="skills-management-ul-list">Slack</li>
          <li className="skills-management-ul-list">Discord</li>
        </ul>
      </div>
    </div>
  </div>
);

// == Export
export default Skills;
