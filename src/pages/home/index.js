import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../../components/Container';
import FaucetHero from '../../components/FaucetHero';
import HowDoesFaucetWork from '../../components/HowDoesFaucetWork';
import Disclaimer from '../../components/Disclaimer';
import { makeRandomString } from '../../utils/helpers';
import { config } from '../../config';
import { setRandomString, getStateError } from './actions';
import { setStateError } from '../signup/actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateError: undefined
    };
  }

  async componentDidMount() {
    const { getStateError } = this.props;
    const stateError = await getStateError();
    if(stateError) {
      const { setStateError } = this.props;
      this.setState({ stateError });
      await setStateError('');
    }
  }

  handleGithubLogin = async () => {
    const randomString = makeRandomString(12);
    const { setRandomString } = this.props;
    await setRandomString(randomString);
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${config.GITHUB_CLIENT_ID}&redirect_uri=${config.REDIRECT_URI}&state=${randomString}`;
  }

  render() {
    const { stateError } = this.state;
    return (
      <Container>
        <FaucetHero handleGithubLogin={this.handleGithubLogin} stateError={stateError} />
        <HowDoesFaucetWork />
        <Disclaimer />
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setRandomString,
  getStateError,
  setStateError
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
