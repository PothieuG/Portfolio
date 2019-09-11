// == Import : npm
import React from 'react';

// Import Components
import Nav from 'src/components/FrenchApp/Nav';
import AboutMe from 'src/components/FrenchApp/AboutMe';
import Work from 'src/components/FrenchApp/Work';
import Skills from 'src/components/FrenchApp/Skills';
import Contact from 'src/components/FrenchApp/Contact';

// Import Image
import arrowColor from 'src/assets/images/svg/arrow_color.svg';
import arrowWhite from 'src/assets/images/svg/arrow_white.svg';

// == Import : local
import './frenchApp.scss';

// AnchorLink Scroll
import AnchorLink from 'react-anchor-link-smooth-scroll';

// == Composant
const FrenchApp = () => (
  <div id="frenchApp">
    <div className="frenchApp">
      <AnchorLink href="#aboutMe"><img src={arrowWhite} alt="arrow_down-white" className="app-arrow_down-white" data-aos="transition-arrow_down-white" data-aos-anchor="#trigger-arrow_down-white" /></AnchorLink>
      <AnchorLink href="#app"><img src={arrowColor} alt="arrow_up-color" className="app-arrow_up-color" data-aos="transition-arrow_up-color" data-aos-anchor="#trigger-arrow_up-color" /></AnchorLink>
      <Nav />
      <AboutMe />
      <Skills />
      <Work />
      <Contact />
    </div>
  </div>
);

// == Export
export default FrenchApp;
