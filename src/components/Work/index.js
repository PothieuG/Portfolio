// == Import : npm
import React from 'react';

// == Import : local
import './work.scss';

// AnchorLink Scroll
import AnchorLink from 'react-anchor-link-smooth-scroll';

// == Composant
const Work = () => (
  <div id="work">
    <div className="work">
      <h2 className="work-title" data-aos="fade-right">Work</h2>
      <div className="work-cards" data-aos="fade">
        <div className="work-cards-card">
          <div className="work-cards-card-overlay">
            <div className="work-cards-card-overlay-titleContent">
              <p className="work-cards-card-overlay-titleContent-title">Une belle image de chaton</p>
            </div>
            <hr />
            <div className="work-cards-card-overlay-infos">
              <div className="work-cards-card-overlay-infos-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rem beatae neslit. Architecto rem beatae neslit. Architecto rem beatae neslit. Architecto rem beatae neslit. Architecto rem beatae neslit. Architecto rem beatae neslit. Architecto rem beatae neslit. Architecto rem beatae neslit. Architecto rem beatae neslit. Architecto rem beatae neslit. Architecto rem beatae neslit. Architecto rem beatae neslit. Architecto rem beatae neslit. Architecto rem beatae nesciunt placeat exercitatio
              </div>
            </div>
            <div className="work-cards-card-overlay-visit">
              <AnchorLink href="#app"><p className="work-cards-card-overlay-visit-text">Visit</p></AnchorLink>
            </div>
            <div className="work-cards-card-overlay-footer">
              <div className="work-cards-card-overlay-footer-date">Septembre 2019</div>
              <a href="https://github.com/PothieuG/Portfolio"><div className="work-cards-card-overlay-footer-github">Github</div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Work;
