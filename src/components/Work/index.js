// == Import : npm
import React from 'react';

// Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';

// == Import : local
import './work.scss';

// == Composant
const Work = () => (
  <div id="work">
    <div className="work">
      <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" offset="620">
        <h2 className="work-title">Work</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" delay="250">
        <div className="work-divider" />
      </ScrollAnimation>
      <div className="work-cards">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="work-cards-card">
            <img src="src/materials/images/screen_oboard.jpg" alt="" className="work-cards-card-image" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="work-cards-card">
            <img src="src/materials/images/screen_oboard.jpg" alt="" className="work-cards-card-image" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="work-cards-card">
            <img src="src/materials/images/screen_oboard.jpg" alt="" className="work-cards-card-image" />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </div>
);

// == Export
export default Work;
