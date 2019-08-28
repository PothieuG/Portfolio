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

import store from 'src/store';

// == Render
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootComponent, document.getElementById('root'));
