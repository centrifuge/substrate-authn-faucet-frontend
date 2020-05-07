import React, { Component } from 'react';
import 'typeface-roboto';
import PropTypes from 'prop-types';
import Theme from './components/Theme';
import Navigation from './components/Navigation';
import Container from './components/Container';
import AppLoader from './components/AppLoader';
import Footer from './components/Footer';
import Router from './router/router.container';
import styles from './app.module.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { login, isLoading } = this.props;
    return (
      <div>
        <Theme>
          <Navigation />
          <Container>
            <div className={styles.row}>
              {isLoading && <AppLoader></AppLoader>}
              <Router login={login} />
            </div>
          </Container>
          <Footer />
        </Theme>
      </div>
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
