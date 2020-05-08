import React, { Component } from 'react';
import 'typeface-roboto';
import PropTypes from 'prop-types';
import Navigation from './components/Navigation';
import AppLoader from './components/AppLoader';
import Footer from './components/Footer';
import Router from './router/router.container';
import {AxisTheme as Theme} from '@centrifuge/axis-theme';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { login, isLoading } = this.props;
    return (
      <Theme>
        <div>

          <Navigation />
          {isLoading && <AppLoader></AppLoader>}
          <Router login={login} />
          <Footer />
        </div>

      </Theme>
    );
  }
}

App.propTypes = {
  login: PropTypes.object,
  router: PropTypes.object,
  searchRequest: PropTypes.func,
  loginWithToken: PropTypes.func,
  push: PropTypes.func,
};

export default App;
