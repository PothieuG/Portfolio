// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import React Router:
import { BrowserRouter as Router, Link } from 'react-router-dom';

// == Import : local
import App from 'src/components/App';

import store from 'src/store';

// == Render
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(rootComponent, document.getElementById('root'));
