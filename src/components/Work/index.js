// == Import : npm
import React from 'react';

// Import Images:
import imageChatons from 'src/assets/images/jpg/chatons-qui-dorment.jpg';

// == Import : local
import './work.scss';

// == Composant
const Work = () => (
  <div id="work">
    <div className="work">
      <h2 className="work-title" data-aos="fade-right">Work</h2>
      <div className="work-cards" data-aos="fade">
        <div className="work-cards-header">Une belle image de chaton</div>
        <div className="work-cards-boxImage">
          <img src={imageChatons} alt="" className="work-cards-card-boxImage-image" />
        </div>
        <div className="work-cards-desription">
          <div className="work-cards-description-text">Alors voilà mon 1er projet, passionnant non ?</div>
        </div>
        <div className="work-cards-technos">
          <ul className="work-cards-technos-ul">
            <li className="work-cards-technos-ul-list">HTML/CSS</li>
            <li className="work-cards-technos-ul-list">React</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Work;
