import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './error.module.scss';

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
    
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }
    
  redirectToHome(){
    if(window.location.pathname==='/'){
      window.location.reload();
    }
    else{
      this.props.history.push('/');
      window.location.reload();
    }
  }
  
  render() {
    if (this.state.errorInfo) {
      return (
        <div className={styles.error}>
          <h1>Something went wrong</h1>
          <details style={{ whiteSpace: 'pre-wrap', width:'80%' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
          <br/>
        </div>
      );
    }
    return this.props.children;
  }  
}

Error.propTypes = {
  children:PropTypes.any,
  history:PropTypes.any
};

export default withRouter(Error);
