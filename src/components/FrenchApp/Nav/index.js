// == Import : npm
import React from 'react';

// == Import : local
import './nav.scss';

// AnchorLink Scroll
import AnchorLink from 'react-anchor-link-smooth-scroll';

// == Composant
const Nav = () => (
  <div id="nav">
    <div className="nav">
      <div className="nav-wrapper">
        <h1 className="nav-wrapper-intro">
          Bienvenue, je suis
          <br />
          <span className="nav-wrapper-intro-name">Gilles Pothieu</span>
        </h1>
        <div className="nav-wrapper-function">
          Web Développeur
        </div>
        <div className="nav-wrapper-subnav">
          <AnchorLink href="#aboutMe" className="nav-wrapper-subnav--aboutme">Qui est Gilles ?</AnchorLink>
          <AnchorLink href="#skills" className="nav-wrapper-subnav-skills">Compétences</AnchorLink>
          <AnchorLink href="#work" className="nav-wrapper-subnav-work">Projets</AnchorLink>
          <AnchorLink href="#contact" className="nav-wrapper-subnav-contact">Contact</AnchorLink>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Nav;
