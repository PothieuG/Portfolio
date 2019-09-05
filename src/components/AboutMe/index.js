// == Import : npm
import React from 'react';

// Scroll Animation

import {
  FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram, FaGithub,
} from 'react-icons/fa';

// == Import : local
import './aboutMe.scss';

// == Composant
const AboutMe = () => (
  <div id="aboutMe">
    <div className="aboutMe">
      <h2 className="aboutMe-title">Who is Gilles ?</h2>
      <div className="aboutMe-description">
        <p className="aboutMe-description-littleDescription">Hello, I'm Gilles ! I'm a french full stack web developer.</p>
        <p className="aboutMe-description-mainDescription">
          I just finished &nbsp;
          <a href="https://oclock.io/"><img src="../../../src/assets/images/svg/logo_oclock.svg" alt="Oclock-icone" className="aboutMe-description-mainDescription-oclock" /></a>
          's school, an amazing remote school. I learned there all I need to start my life as web developer.<br />
          Right now, I'm just keep learning all my brain can accept, waiting for a job opportunity.
          <br />
          <br />
          Oh, by the way... I'm nurse too.
        </p>
      </div>
      <div className="aboutMe-interests">
        <h3 className="aboutMe-interests-title">Interests & Likes</h3>
        <ul className="aboutMe-interests-ul">
          <div className="aboutMe-interests-ul-list"> - Sport: <span className="aboutMe-interests-ul-list-italic"> tennis, running, table tennis...</span></div>
          <div className="aboutMe-interests-ul-list"> - Reading</div>
          <div className="aboutMe-interests-ul-list"> - Cinema</div>
          <div className="aboutMe-interests-ul-list"> - Video-Games</div>
          <div className="aboutMe-interests-ul-list"> - Hanging out with friends</div>
          <div className="aboutMe-interests-ul-list"> - Video-Games development</div>
        </ul>
      </div>
      <div className="aboutMe-socials">
        <a href="https://www.linkedin.com/in/gilles-pothieu-b43143180/"><FaLinkedin className="aboutMe-socials-linkedin" /></a>
        <a href="https://www.facebook.com/gilles.pothieupro"><FaFacebookSquare className="aboutMe-socials-facebook" /></a>
        <a href="https://twitter.com/PothieuG"><FaTwitter className="aboutMe-socials-twitter" /></a>
        <a href="https://www.instagram.com/gillespothieu/"><FaInstagram className="aboutMe-socials-instagram" /></a>
        <a href="https://github.com/PothieuG"><FaGithub className="aboutMe-socials-github" /></a>
      </div>
    </div>
  </div>
);

// == Export
export default AboutMe;
