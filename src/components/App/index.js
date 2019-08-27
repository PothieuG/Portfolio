// == Import : npm
import React from 'react';

import Nav from 'src/components/Nav';
import AboutMe from 'src/components/AboutMe';
import Work from 'src/components/Work';
import Experience from 'src/components/Experience';
import Education from 'src/components/Education';
import Skills from 'src/components/Skills';
import Contact from 'src/components/Contact';

// == Import : local
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <Nav />
    <AboutMe />
    <Work />
    <Experience />
    <Education />
    <Skills />
    <Contact />
  </div>
);

// == Export
export default App;
