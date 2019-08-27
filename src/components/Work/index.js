// == Import : npm
import React from 'react';

// == Import : local
import './work.scss';

// == Composant
const Work = () => (
  <div id="work">
    <div className="work">
      <h2 className="work-title">Work</h2>
      <div className="work-cards">
        <div className="work-cards-card">
          <img src="src/materials/images/screen_oboard.jpg" alt="" className="work-cards-card-image" />
        </div>
        <div className="work-cards-card">
          <img src="src/materials/images/screen_oboard.jpg" alt="" className="work-cards-card-image" />
        </div>
        <div className="work-cards-card">
          <img src="src/materials/images/screen_oboard.jpg" alt="" className="work-cards-card-image" />
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Work;
