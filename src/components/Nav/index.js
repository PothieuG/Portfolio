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
      <h1 className="nav-name">
        Gilles Pothieu
      </h1>
      <div className="nav-function">
        Developer
      </div>
      <div className="nav-socials">
        <div className="nav-socials-linkedin"><i className="fab fa-linkedin"></i></div>
        <div className="nav-socials-facebook">Facebook</div>
        <div className="nav-socials-twitter">Twitter</div>
        <div className="nav-socials-instagram">Instagram</div>
        <div className="nav-socials-github">Github</div>
      </div>
      <div className="nav-subnav">
        <AnchorLink href="#aboutMe" className="nav-subnav-aboutme">About Me</AnchorLink>
        <AnchorLink href="#work" className="nav-subnav-work">Work</AnchorLink>
        <AnchorLink href="#experience" className="nav-subnav-experience">Experience</AnchorLink>
        <AnchorLink href="#education" className="nav-subnav-education">Education</AnchorLink>
        <AnchorLink href="#skills" className="nav-subnav-skills">Skills</AnchorLink>
        <AnchorLink href="#contact" className="nav-subnav-contact">Contact</AnchorLink>
      </div>
      <div className="nav-arrow_down">Arrow Down</div>
    </div>
  </div>
);

// == Export
export default Nav;
