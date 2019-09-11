// == Import : npm
import React from 'react';

// == Import : local
import './contact.scss';

// Import Component
import PopContent from 'src/components/FrenchApp/Contact/PopContent';

// Import Tipy
import Tippy from '@tippy.js/react';

// == Composant
const Contact = () => {
  const popContent = <PopContent />;

  return (
    <div id="contact">
      <div className="contactFr">
        <div className="contactFr-header">
          <h2 className="contactFr-header-title" data-aos="fade-right">Contactez moi !</h2>
        </div>
        <div className="contactFr-content" data-aos="fade">
          <div className="contactFr-content-number">
            <p className="contactFr-content-number-text"><a href="tel:+33619821940"><span className="contactFr-content-number-text-num">+33 (0)6.19.82.19.40</span></a></p>
          </div>
          <div className="contactFr-content-mail">
            <p className="contactFr-content-mail-text"><a href="mailto:gillespothieu.pro@outlook.fr"><span className="contactFr-content-mail-text-mail">gillespothieu.pro@outlook.fr</span></a></p>
          </div>
        </div>
        <div className="contactFr-cvBox" data-aos="fade">
          <div className="contactFr-cvBox-text">
            Prenez le temps de jeter un oeil à &nbsp;
            <Tippy content={popContent} arrow animation="scale" className="contactFr-cvBox-text-background" placement="bottom" interactive="true" arrowType="round">
              <span className="contactFr-cvBox-text-span">mon CV !</span>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Contact;
