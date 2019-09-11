// Import AOS css
import '../../../node_modules/aos/dist/aos.css';

// == Import : npm
import React from 'react';

// Import AOS
import AOS from 'aos';

// Import React-Switch
import Switch from 'react-switch';

// Import Components
import EnglishApp from 'src/components/EnglishApp';
import FrenchApp from 'src/components/FrenchApp';

// == Import : local
import './app.scss';

// == Composant
class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init({
      duration: 1000,
    });
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }


  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps() {
    AOS.refresh();
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    const { checked } = this.state;

    return (
      <div id="app">
        <div className="app">
          <Switch onChange={this.handleChange} checked={checked} className="app-switch" />
          <EnglishApp />
          <FrenchApp />
        </div>
      </div>
    );
  }
}

// == Export
export default App;
