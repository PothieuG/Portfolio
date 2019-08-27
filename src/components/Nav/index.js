// == Import : npm
import React from 'react';

// == Import : local
import './nav.scss';

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
        <div className="nav-socials-linkedin">LinkeDin</div>
        <div className="nav-socials-facebook">Facebook</div>
        <div className="nav-socials-twitter">Twitter</div>
        <div className="nav-socials-instagram">Instagram</div>
        <div className="nav-socials-github">Github</div>
      </div>
      <div className="nav-subnav">
        <div className="nav-subnav-aboutme">About Me</div>
        <div className="nav-subnav-work">Work</div>
        <div className="nav-subnav-experience">Experience</div>
        <div className="nav-subnav-education">Education</div>
        <div className="nav-subnav-skils">Skills</div>
        <div className="nav-subnav-contact">Contact</div>
      </div>
      <div className="nav-arrow_down">Arrow Down</div>
    </div>
  </div>
);

// == Export
export default Nav;
