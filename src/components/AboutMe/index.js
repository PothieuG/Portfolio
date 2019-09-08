// == Import : npm
import React from 'react';

// Import logos:
import {
  FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram, FaGithub,
} from 'react-icons/fa';

// Import Images
import OclockSVG from 'src/assets/images/svg/logo_oclock.svg';

// == Import : local
import './aboutMe.scss';

// == Composant
const AboutMe = () => (
  <div id="aboutMe">
    <div className="aboutMe">
      <h2 className="aboutMe-title" data-aos="fade-right" id="trigger-arrow">Who is Gilles ?</h2>
      <div className="aboutMe-description">
        <p className="aboutMe-description-littleDescription" data-aos="fade-up">Hello, I'm Gilles ! I'm a french full stack web developer.</p>
        <p className="aboutMe-description-mainDescription" data-aos="fade-down">
          I just finished &nbsp;
          <a href="https://oclock.io/"><img src={OclockSVG} alt="logo oclock" className="aboutMe-description-mainDescription-oclock" /></a>
          's school, an amazing remote school. I learned there all I need to start my life as web developer.<br />
          Right now, I'm just keep learning all my brain can accept, waiting for a job opportunity.
          <br />
          <br />
          Oh, by the way... I'm registred nurse too.
        </p>
      </div>
      <div className="aboutMe-interests">
        <h3 className="aboutMe-interests-title" data-aos="fade-up">Interests & Likes</h3>
        <ul className="aboutMe-interests-ul" data-aos="fade-down">
          <div className="aboutMe-interests-ul-list"> - Sport: <span className="aboutMe-interests-ul-list-italic"> tennis, running, table tennis...</span></div>
          <div className="aboutMe-interests-ul-list"> - Reading</div>
          <div className="aboutMe-interests-ul-list"> - Cinema</div>
          <div className="aboutMe-interests-ul-list"> - Video-Games</div>
          <div className="aboutMe-interests-ul-list"> - Hanging out with friends</div>
          <div className="aboutMe-interests-ul-list"> - Video-Games development</div>
        </ul>
      </div>
      <div className="aboutMe-socials" id="trigger-arrowback">
        <a href="https://www.linkedin.com/in/gilles-pothieu-b43143180/"><FaLinkedin className="aboutMe-socials-linkedin" data-aos="zoom-in" data-aos-offset="1250" /></a>
        <a href="https://www.facebook.com/gilles.pothieupro"><FaFacebookSquare className="aboutMe-socials-facebook" data-aos="zoom-in" data-aos-offset="1250" data-aos-delay="150" /></a>
        <a href="https://twitter.com/PothieuG"><FaTwitter className="aboutMe-socials-twitter" data-aos="zoom-in" data-aos-offset="1250" data-aos-delay="300" /></a>
        <a href="https://www.instagram.com/gillespothieu/"><FaInstagram className="aboutMe-socials-instagram" data-aos="zoom-in" data-aos-offset="1250" data-aos-delay="450" /></a>
        <a href="https://github.com/PothieuG"><FaGithub className="aboutMe-socials-github" data-aos="zoom-in" data-aos-offset="1250" data-aos-delay="600" /></a>
      </div>
    </div>
  </div>
);

// == Export
export default AboutMe;
