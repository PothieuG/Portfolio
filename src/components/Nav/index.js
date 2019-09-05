// == Import : npm
import React from 'react';

// == Import : local
import './nav.scss';

// AnchorLink Scroll
import AnchorLink from 'react-anchor-link-smooth-scroll';

// React Icons
import { IoMdArrowRoundDown } from 'react-icons/io';

// == Composant
const Nav = () => (
  <div id="nav">
    <div className="nav">
      <h1 className="nav-intro">
        Hi there, my name is
        <br />
        <span className="nav-intro-name">Gilles Pothieu !</span>
      </h1>
      <div className="nav-function">
        Web Developer
      </div>
      <div className="nav-subnav">
        <AnchorLink href="#aboutMe" className="nav-subnav-aboutme">Who is Gilles ?</AnchorLink>
        <AnchorLink href="#work" className="nav-subnav-work">Work</AnchorLink>
        <AnchorLink href="#skills" className="nav-subnav-skills">Skills</AnchorLink>
        <AnchorLink href="#contact" className="nav-subnav-contact">Contact</AnchorLink>
      </div>
      <IoMdArrowRoundDown className="nav-arrow" />
    </div>
  </div>
);

// == Export
export default Nav;
