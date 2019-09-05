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

// == Import : local
import './app.scss';

// React Icons
import { IoMdArrowRoundDown } from 'react-icons/io';

// == Composant
class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init({
      duration: 1000,
    });
  }

  componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    return (
      <div id="app">
        <div className="app">
          <IoMdArrowRoundDown className="app-arrow" data-aos="transition-arrow" data-aos-anchor="#trigger-arrow" />
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
