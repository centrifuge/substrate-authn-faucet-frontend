export const getCurrentError = (value, errors) => {
  let activeError;

  if (errors.length > 0) {
    activeError = errors.find(extraError => extraError.isError && extraError.isError(value) === true);
  }

  return activeError ? activeError.key : false;
};
