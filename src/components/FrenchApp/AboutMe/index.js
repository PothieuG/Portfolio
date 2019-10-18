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
      <div className="aboutMe-top">
        <h2 className="aboutMe-top-title" data-aos="fade-right" id="trigger-arrow_down-white">Qui est Gilles ?</h2>
        <div className="aboutMe-top-description">
          <p className="aboutMe-top-description-littleDescription" data-aos="fade-up">Bienvenue sur mon portfolio ! Moi c'est Gilles, je suis développeur web full stack.</p>
          <p className="aboutMe-top-description-mainDescription" data-aos="fade-down">
              Je viens juste de finir ma formation à l'école en téléprésentiel &nbsp;
            <a href="https://oclock.io/"><img src={OclockSVG} alt="O'Clock" className="aboutMe-top-description-mainDescription-oclock" /></a>&nbsp;.
              Elle m'a donné tous les outils nécessaires pour débuter ma carrière de développeur web.<br />
              En attendant d'avoir une opportunité de travail, je continue, en autodidacte à me former sur un maximum de langages.
            <br />
              Avant de coder, j'étais infirmier.
          </p>
        </div>
        <div className="aboutMe-top-interests">
          <h3 className="aboutMe-top-interests-title" data-aos="fade-up">Hobbies</h3>
          <ul className="aboutMe-top-interests-ul" data-aos="fade-down">
            <div className="aboutMe-top-interests-ul-list"> - Sport : <span className="aboutMe-top-interests-ul-list-italic"> tennis, running, sports des raquette</span></div>
            <div className="aboutMe-top-interests-ul-list"> - Lecture</div>
            <div className="aboutMe-top-interests-ul-list"> - Cinema</div>
            <div className="aboutMe-top-interests-ul-list"> - Gaming</div>
            <div className="aboutMe-top-interests-ul-list"> - Sorties entre amis</div>
            <div className="aboutMe-top-interests-ul-list"> - L'espace</div>
          </ul>
        </div>
      </div>
      <div className="aboutMe-socials" id="trigger-arrow_up-color">
        <a href="https://www.linkedin.com/in/gilles-pothieu-b43143180/"><FaLinkedin className="aboutMe-socials-linkedin" data-aos="zoom-in" data-aos-offset="1000" /></a>
        <a href="https://www.facebook.com/gilles.pothieupro"><FaFacebookSquare className="aboutMe-socials-facebook" data-aos="zoom-in" data-aos-offset="1000" data-aos-delay="150" /></a>
        <a href="https://twitter.com/PothieuG"><FaTwitter className="aboutMe-socials-twitter" data-aos="zoom-in" data-aos-offset="1000" data-aos-delay="300" /></a>
        <a href="https://www.instagram.com/gillespothieu/"><FaInstagram className="aboutMe-socials-instagram" data-aos="zoom-in" data-aos-offset="1000" data-aos-delay="450" /></a>
        <a href="https://github.com/PothieuG"><FaGithub className="aboutMe-socials-github" data-aos="zoom-in" data-aos-offset="1000" data-aos-delay="600" /></a>
      </div>
    </div>
  </div>
);

// == Export
export default AboutMe;
