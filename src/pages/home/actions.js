import { setLocalStorage, getLocalStorage } from '../../services/browser.service';

export const setRandomString = (randomString) => {
  return async () => {
    await setLocalStorage('randomString', randomString);
  };
};
  
export const getStateError = () => {
  return async () => {
    const stateError =  await getLocalStorage('stateError');
    return stateError;
  };
};
    