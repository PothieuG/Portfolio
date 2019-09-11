// == Import : npm
import React from 'react';

// Import Image
import fullTab from 'src/assets/images/svg/tabs/pastille_pleine.svg';
import halfTab from 'src/assets/images/svg/tabs/pastille-demi.svg';
import emptyTab from 'src/assets/images/svg/tabs/pastille-vide.svg';

// == Import : local
import './skills.scss';

// == Composant
const Skills = () => (
  <div id="skills">
    <div className="skills">
      <h2 className="skills-title" data-aos="fade-right">Compétences</h2>
      <div className="skills-front">
        <h3 className="skills-front-header" data-aos="fade">Front-End</h3>
        <ul className="skills-front-ul">
          <li className="skills-front-ul-list">HTML/CSS
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-front-ul-list">React/Redux
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={halfTab} alt="half_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-front-ul-list">Javascript/JQuery
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={halfTab} alt="half_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-front-ul-list">
          Frameworks:
            <span className="skills-front-ul-list-frameworks">Bootstrap, ANTD, Semantic UI, Materialize...</span>
            <div className="skills-front-ul-list-frameworks-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
        </ul>
      </div>
      <div className="skills-back" data-aos="fade">
        <h3 className="skills-back-header">Back-End</h3>
        <ul className="skills-back-ul">
          <li className="skills-back-ul-list">PHP/MyAdmin
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={halfTab} alt="half_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-back-ul-list">MySQL
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-back-ul-list">Laravel
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-back-ul-list">MongoDB/Mongoose
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-back-ul-list">Node.js
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={halfTab} alt="half_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
        </ul>
      </div>
      <div className="skills-cms" data-aos="fade">
        <h3 className="skills-cms-header">CMS</h3>
        <ul className="skills-cms-ul">
          <li className="skills-cms-ul-list">Wordpress
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={halfTab} alt="half_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
        </ul>
      </div>
      <div className="skills-frameworks" data-aos="fade" data-aos-offset="50">
        <h3 className="skills-frameworks-header">Frameworks & Outils</h3>
        <ul className="skills-frameworks-ul">
          <li className="skills-frameworks-ul-list">
          Ajax
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-frameworks-ul-list">Axios
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-frameworks-ul-list">Express.js
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={halfTab} alt="half_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-frameworks-ul-list">MVC/MCS
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={halfTab} alt="half_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-frameworks-ul-list">Mocodo
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-frameworks-ul-list">Whimsical
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-frameworks-ul-list">Environnement LAMP
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={halfTab} alt="half_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-frameworks-ul-list">Git/GitHub
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
        </ul>
      </div>
      <div className="skills-management" data-aos="fade" data-aos-offset="50">
        <h3 className="skills-management-header">Management</h3>
        <ul className="skills-management-ul">
          <li className="skills-management-ul-list">Méthode Agiles
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={halfTab} alt="half_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-management-ul-list">SCRUM
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-management-ul-list">Kanban
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-management-ul-list">Slack
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
          <li className="skills-management-ul-list">Discord
            <div className="skills-front-ul-list-tab">
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={fullTab} alt="full_tab" />
              <img src={emptyTab} alt="empty_tab" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

// == Export
export default Skills;
