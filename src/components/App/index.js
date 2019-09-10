// Import AOS css
import '../../../node_modules/aos/dist/aos.css';

// == Import : npm
import React from 'react';

// Import AOS
import AOS from 'aos';

// Import Components
import Nav from 'src/components/Nav';
import AboutMe from 'src/components/AboutMe';
import Work from 'src/components/Work';
import Skills from 'src/components/Skills';
import Contact from 'src/components/Contact';

// Import Image
import arrowColor from 'src/assets/images/svg/arrow_color.svg';
import arrowWhite from 'src/assets/images/svg/arrow_white.svg';

// == Import : local
import './app.scss';

// AnchorLink Scroll
import AnchorLink from 'react-anchor-link-smooth-scroll';

// == Composant
class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init({
      duration: 1000,
    });
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    return (
      <div id="app">
        <div className="app">
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
  }
}

// == Export
export default App;
