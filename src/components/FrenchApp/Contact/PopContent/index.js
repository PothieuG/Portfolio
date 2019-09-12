// == Import : npm
import React from 'react';

// Import Images
import FrenchFlag from 'src/assets/images/png/france-flag-button-round-icon-256.png';
import UKFlag from 'src/assets/images/png/united-kingdom-flag-button-round-icon-256.png';


// == Import : local
import './popContent.scss';

// == Composant
const PopContent = () => (
  <div id="popContent">
    <div className="popContent">
      <a href="https://drive.google.com/file/d/1zpKRsCFs6HqGyRGAeY-9lAL0_6etk49N/view?usp=sharing" download>
        <img src={FrenchFlag} alt="french_flag" className="popContent-flag" />
      </a>
      <a href="https://drive.google.com/file/d/1-aIxxkyK4965KpOG3ZMoT-WIQXobZkwp/view?usp=sharing" download>
        <img src={UKFlag} alt="french_flag" className="popContent-flag" />
      </a>
    </div>
  </div>
);

// == Export
export default PopContent;
