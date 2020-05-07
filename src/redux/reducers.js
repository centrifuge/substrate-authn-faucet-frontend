import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import { connectRouter } from 'connected-react-router';
import signupReducer from '../pages/signup/reducer';

const createReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    signupReducer,
    browser: createResponsiveStateReducer({
      mobile: 320,
      tablet: 768,
      desktop: 1024
    })
  });
};

export default createReducer;
