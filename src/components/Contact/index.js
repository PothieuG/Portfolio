// == Import : npm
import React from 'react';

// == Import : local
import './contact.scss';

const { Link } = require('react-router-dom');


// == Composant
const Contact = () => (
  <div id="contact">
    <div className="contact">
      <div className="contact-header">
        <h2 className="contact-header-title">Contact Me ?</h2>
      </div>
      <div className="contact-content">
        <p className="contact-content-text">If you need informations, or have any question, please, feel free to contact me:</p>
        <div className="contact-content-number">
          <p className="contact-content-number-text">My number: <a href="tel:+33619821940"><span className="contact-content-number-text-num">+33 (0)6.19.82.19.40</span></a></p>
        </div>
        <div className="contact-content-mail">
          <p className="contact-content-mail-text">My mail: <a href="mailto:gillespothieu.pro@outlook.fr"><span className="contact-content-mail-text-mail">gillespothieu.pro@outlook.fr</span></a></p>
        </div>
      </div>
      <div className="contact-cvBox">
        <div className="contact-cvBox text">
          Ho, and take a look at my CV !
        </div>
        <div className="contact-cvBox-cv">
          <a href="src/assets/pdf/cv.pdf" download>Yo</a>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Contact;
