// == Import : npm
import React from 'react';

// == Import : local
import './contact.scss';

// Import Component
import PopContent from 'src/components/EnglishApp/Contact/PopContent';

// Import Tipy
import Tippy from '@tippy.js/react';

// == Composant
const Contact = () => {
  const popContent = <PopContent />;

  return (
    <div id="contact">
      <div className="contact">
        <div className="contact-header">
          <h2 className="contact-header-title" data-aos="fade-right">Contact me !</h2>
        </div>
        <div className="contact-content" data-aos="fade">
          <div className="contact-content-number">
            <p className="contact-content-number-text"><a href="tel:+33619821940"><span className="contact-content-number-text-num">+33 (0)6.19.82.19.40</span></a></p>
          </div>
          <div className="contact-content-mail">
            <p className="contact-content-mail-text"><a href="mailto:gillespothieu.pro@outlook.fr"><span className="contact-content-mail-text-mail">gillespothieu.pro@outlook.fr</span></a></p>
          </div>
        </div>
        <div className="contact-cvBox" data-aos="fade">
          <div className="contact-cvBox-text">
            Ho, and take a look at &nbsp;
            <Tippy content={popContent} arrow animation="scale" className="contact-cvBox-text-background" placement="bottom" interactive="true" arrowType="round">
              <span className="contact-cvBox-text-span">my CV !</span>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Contact;
