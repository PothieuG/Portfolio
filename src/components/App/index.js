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

// Import Images
import FrenchFlag from 'src/assets/images/png/france-flag-button-round-icon-256.png';
import UKFlag from 'src/assets/images/png/united-kingdom-flag-button-round-icon-256.png';

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
    let application;

    if (checked) {
      application = <FrenchApp />;
    }
    else {
      application = <EnglishApp />;
    }

    return (
      <div id="app">
        <div className="app">
          <div className="app-switch">
            <Switch
              onChange={this.handleChange}
              checked={checked}
              offColor="#b0b0b0"
              onColor="#b0b0b0"
              offHandleColor="#fff"
              onHandleColor="#fff"
              uncheckedIcon={
                <img src={FrenchFlag} className="app-switch-french" alt="frenchFlag" />
              }
              checkedIcon={
                <img src={UKFlag} className="app-switch-uk" alt="ukFlag" fill="gray" />
              }
            />
          </div>
          {application}
        </div>
      </div>
    );
  }
}

// == Export
export default App;
