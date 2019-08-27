// == Import : npm
import React from 'react';

// == Import : local
import './nav.scss';

// AnchorLink Scroll
import AnchorLink from 'react-anchor-link-smooth-scroll';

// React Icons
import {
  FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram, FaGithub,
} from 'react-icons/fa';
import { IoMdArrowRoundDown } from 'react-icons/io';

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
        <FaLinkedin className="nav-socials-linkedin" />
        <FaFacebookSquare className="nav-socials-facebook" />
        <FaTwitter className="nav-socials-twitter" />
        <FaInstagram className="nav-socials-instagram" />
        <FaGithub className="nav-socials-github" />
      </div>
      <div className="nav-subnav">
        <AnchorLink href="#aboutMe" className="nav-subnav-aboutme">About Me</AnchorLink>
        <AnchorLink href="#work" className="nav-subnav-work">Work</AnchorLink>
        <AnchorLink href="#experience" className="nav-subnav-experience">Experience</AnchorLink>
        <AnchorLink href="#education" className="nav-subnav-education">Education</AnchorLink>
        <AnchorLink href="#skills" className="nav-subnav-skils">Skills</AnchorLink>
        <AnchorLink href="#contact" className="nav-subnav-contact">Contact</AnchorLink>
      </div>
      <IoMdArrowRoundDown className="nav-arrow" />
    </div>
  </div>
);

// == Export
export default Nav;
