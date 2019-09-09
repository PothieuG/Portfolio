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
          Hi there, my name is
          <br />
          <span className="nav-wrapper-intro-name">Gilles Pothieu</span>
        </h1>
        <div className="nav-wrapper-function">
          Web Developer
        </div>
        <div className="nav-wrapper-subnav">
          <AnchorLink href="#aboutMe" className="nav-wrapper-subnav--aboutme">Who is Gilles ?</AnchorLink>
          <AnchorLink href="#skills" className="nav-wrapper-subnav-skills">Skills</AnchorLink>
          <AnchorLink href="#work" className="nav-wrapper-subnav-work">Work</AnchorLink>
          <AnchorLink href="#contact" className="nav-wrapper-subnav-contact">Contact</AnchorLink>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Nav;
