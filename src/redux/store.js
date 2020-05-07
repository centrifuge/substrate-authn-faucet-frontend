import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { responsiveStoreEnhancer } from 'redux-responsive';
import createReducer from './reducers';
import { USER_LOGOUT } from '../constants/app';
 
let store;
const history = process.env.NODE_ENV === 'test' ? createMemoryHistory() : createBrowserHistory();

const resetEnhancer = rootReducer => (state, action) => {
  if (action.type !== USER_LOGOUT) return rootReducer(state, action);
  const newState = rootReducer(undefined, {});
  newState.router = state.router;
  return newState;
};

export const configureStore = () => {
  const middlewares = Array.prototype.concat(
    [],
    [thunk, routerMiddleware(history)],
    process.env.NODE_ENV === 'development' ? [createLogger()] : []
  );

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    responsiveStoreEnhancer
  );

  store = createStore(resetEnhancer(createReducer(history)), enhancer);
  store.asyncReducers = {};

  return {
    store,
    history
  };
};
