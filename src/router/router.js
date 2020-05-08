import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

class Router extends Component {
  componentDidMount() {
    this.unlisten = this.unlisten.bind(this);
  }

  unlisten() {
    this.props.history.listen(() => {
      window.scrollTo(0, 0);
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { routes } = this.props;
    return (
      <Switch>
        {routes
          .filter(routes => routes.component)
          .map(
            route =>
              (
                <Route
                  exact
                  path={route.path}
                  key={route.name}
                  component={route.component}
                />
              )
          )}
      </Switch>
    );
  }
}

Router.displayName = 'Router';
Router.propTypes = {
  routes: PropTypes.array,
  history: PropTypes.object
};

export default Router;
