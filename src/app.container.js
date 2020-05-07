import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import App from './app';

const mapStateToProps = state => ({
  router: state.router,
  isLoading: state.signupReducer.isLoading
});

const mapDispatchToProps = {
  push
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
