// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Fonts
import 'src/assets/fonts/Light/tt-firs-light-webfont.woff';
import 'src/assets/fonts/Hairline/tt-firs-hairline-webfont.woff';
import 'src/assets/fonts/Bold/tt-firs-bold-webfont.woff';

import store from 'src/store';

// == Render
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootComponent, document.getElementById('root'));
