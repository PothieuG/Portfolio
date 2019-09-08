// == Import : npm
import React from 'react';

// == Import : local
import './contact.scss';

// Import Component
import PopContent from 'src/components/Contact/PopContent';

// Import Tipy
import Tippy from '@tippy.js/react';

// == Composant
const Contact = () => {
  
  const popContent = <PopContent />

  return(
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
            Ho, and take a look at my CV !
          </div>
          <div className="contact-cvBox-cv">
            <a href="https://drive.google.com/open?id=1HMcEqJybEKcWfP5nY-U-44sWU0_UdHxE" download>Yo</a>
          </div>

          <Tippy content={popContent} arrow={true} className="test">
            <button>My button</button>
          </Tippy>
        </div>
      </div>
    </div>
  );
}

// == Export
export default Contact;
