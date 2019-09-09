// == Import : npm
import React from 'react';

// == Import : local
import './work.scss';

// AnchorLink Scroll
import AnchorLink from 'react-anchor-link-smooth-scroll';

// Import logos:
import {
  FaGithub,
} from 'react-icons/fa';

// == Composant
const Work = () => (
  <div id="work">
    <div className="work" id="trigger-arrow_up-color">
      <div className="work-wrapper">
        <h2 className="work-wrapper-title" data-aos="fade-right">Work</h2>
        <div className="work-wrapper-cards" data-aos="fade">
          <div className="work-wrapper-cards-card">
            <div className="work-wrapper-cards-card-overlay">
              <div className="work-wrapper-cards-card-overlay-titleContent">
                <p className="work-wrapper-cards-card-overlay-titleContent-title">Gilles' Portfolio</p>
              </div>
              <hr />
              <div className="work-wrapper-cards-card-overlay-infos">
                <div className="work-wrapper-cards-card-overlay-infos-text">
                  Just where you are :)
                </div>
              </div>
              <div className="work-wrapper-cards-card-overlay-visit">
                <AnchorLink href="#app"><p className="work-wrapper-cards-card-overlay-visit-text">Visit</p></AnchorLink>
              </div>
              <div className="work-wrapper-cards-card-overlay-footer">
                <div className="work-wrapper-cards-card-overlay-footer-date">Septembre 2019</div>
                <a href="https://github.com/PothieuG/Portfolio" className="work-wrapper-cards-card-overlay-footer-github">
                  <FaGithub className="work-wrapper-cards-card-overlay-footer-github-icon " width="100%" />
                </a>
              </div>
            </div>
          </div>
          <div className="work-wrapper-cards-card">
            <div className="work-wrapper-cards-card-overlay">
              <div className="work-wrapper-cards-card-overlay-titleContent">
                <p className="work-wrapper-cards-card-overlay-titleContent-title">Gilles' Portfolio</p>
              </div>
              <hr />
              <div className="work-wrapper-cards-card-overlay-infos">
                <div className="work-wrapper-cards-card-overlay-infos-text">
                  Just where you are :)
                </div>
              </div>
              <div className="work-wrapper-cards-card-overlay-visit">
                <AnchorLink href="#app"><p className="work-wrapper-cards-card-overlay-visit-text">Visit</p></AnchorLink>
              </div>
              <div className="work-wrapper-cards-card-overlay-footer">
                <div className="work-wrapper-cards-card-overlay-footer-date">Septembre 2019</div>
                <a href="https://github.com/PothieuG/Portfolio" className="work-wrapper-cards-card-overlay-footer-github">
                  <FaGithub className="work-wrapper-cards-card-overlay-footer-github-icon " width="100%" />
                </a>
              </div>
            </div>
          </div>
          <div className="work-wrapper-cards-card">
            <div className="work-wrapper-cards-card-overlay">
              <div className="work-wrapper-cards-card-overlay-titleContent">
                <p className="work-wrapper-cards-card-overlay-titleContent-title">Gilles' Portfolio</p>
              </div>
              <hr />
              <div className="work-wrapper-cards-card-overlay-infos">
                <div className="work-wrapper-cards-card-overlay-infos-text">
                  Just where you are :)
                </div>
              </div>
              <div className="work-wrapper-cards-card-overlay-visit">
                <AnchorLink href="#app"><p className="work-wrapper-cards-card-overlay-visit-text">Visit</p></AnchorLink>
              </div>
              <div className="work-wrapper-cards-card-overlay-footer">
                <div className="work-wrapper-cards-card-overlay-footer-date">Septembre 2019</div>
                <a href="https://github.com/PothieuG/Portfolio" className="work-wrapper-cards-card-overlay-footer-github">
                  <FaGithub className="work-wrapper-cards-card-overlay-footer-github-icon " width="100%" />
                </a>
              </div>
            </div>
          </div>
          <div className="work-wrapper-cards-card">
            <div className="work-wrapper-cards-card-overlay">
              <div className="work-wrapper-cards-card-overlay-titleContent">
                <p className="work-wrapper-cards-card-overlay-titleContent-title">Gilles' Portfolio</p>
              </div>
              <hr />
              <div className="work-wrapper-cards-card-overlay-infos">
                <div className="work-wrapper-cards-card-overlay-infos-text">
                  Just where you are :)
                </div>
              </div>
              <div className="work-wrapper-cards-card-overlay-visit">
                <AnchorLink href="#app"><p className="work-wrapper-cards-card-overlay-visit-text">Visit</p></AnchorLink>
              </div>
              <div className="work-wrapper-cards-card-overlay-footer">
                <div className="work-wrapper-cards-card-overlay-footer-date">Septembre 2019</div>
                <a href="https://github.com/PothieuG/Portfolio" className="work-wrapper-cards-card-overlay-footer-github">
                  <FaGithub className="work-wrapper-cards-card-overlay-footer-github-icon " width="100%" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Work;
