import * as types from './actionTypes';
import { signup } from './api';
import { getLocalStorage, setLocalStorage } from '../../services/browser.service';
import * as contryList from '../../lib/json/country-list.json';
import { sortByKey } from '../../utils/helpers';

const updateFormField = updatedTransactionsForm => ({
  type: types.SIGNUP_UPDATE_FORM_FIELD,
  updatedTransactionsForm
});

const signupStart = () => ({ type: types.SIGNUP_START });


const signupSuccess = response => ({
  type: types.SIGNUP_SUCCESS,
  response
});

export const signupError = (error) => ({
  type: types.SIGNUP_ERROR,
  error
});

export const isValid = isValidForm => {
  return Object.values(isValidForm).reduce(
    (acc, value) => (value === false ? false : acc),
    true
  );
};


export const updateField = (field, value, error) => {
  return function(dispatch, getState) {
    const signupForm = getState().signupReducer.signupForm;

    const form = {
      ...signupForm.form,
      ...{
        [field]: value
      }
    };

    const isValidForm = {
      ...signupForm.isValidForm,
      ...{
        [field]: !error
      }
    };

    const updatedSignupForm = {
      ...signupForm,
      ...{
        form,
        reset: false,
        isValidForm
      }
    };

    dispatch(updateFormField(updatedSignupForm));
  };
};

export const signupRequest = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(signupStart());
      const {isValidForm, form} = getState().signupReducer.signupForm;
      const valid = isValid(isValidForm);
      if(valid) {
        const data = {
          full_name: form.full_name,
          company_name: form.company_name,
          country: form.country.value,
          us_citizen: form.us_citizen.value,
          address: form.address,
          email: form.email,
          toc_and_privacy: form.toc_and_privacy,
          auth_type: form.auth_type
        };
        const response = await signup(data, form.code);
        dispatch(signupSuccess(response));
      } else {
        dispatch(signupError());
      }
    } catch (e) {
      console.log(new Date(), e);
      return dispatch(signupError(e));
    }
  };
};

export const getRandomString = async () => {
  const randomString = await getLocalStorage('randomString');
  return randomString;
};

export const setStateError = (stateError) => {
  return async () => {
    await setLocalStorage('stateError', stateError);
  };
};

export const getCountryList = () => {
  return async () => {
    const sortedList = sortByKey(contryList.default, 'COUNTRY');
    const countries = sortedList.map(c => {
      return { value: c.ISO, label: c.COUNTRY};
    });
    return countries;
  };
};
