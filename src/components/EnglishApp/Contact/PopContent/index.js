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
      <a href="https://drive.google.com/open?id=1HMcEqJybEKcWfP5nY-U-44sWU0_UdHxE" download>
        <img src={FrenchFlag} alt="french_flag" className="popContent-flag" />
      </a>
      <img src={UKFlag} alt="french_flag" className="popContent-flag" />
    </div>
  </div>
);

// == Export
export default PopContent;
