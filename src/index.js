// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// React Popover stylesheet
import 'react-awesome-popover/build/index.css';

// React Animation on Scroll
import 'animate.css/animate.min.css';

// == Import : local
import App from 'src/components/App';

// Fonts
import 'src/materials/fonts/Light/tt-firs-light-webfont.woff';
import 'src/materials/fonts/Hairline/tt-firs-hairline-webfont.woff';
import 'src/materials/fonts/Bold/tt-firs-bold-webfont.woff';

import store from 'src/store';

// == Render
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootComponent, document.getElementById('root'));
