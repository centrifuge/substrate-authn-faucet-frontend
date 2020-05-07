import React from 'react';
import PropTypes from 'prop-types';
import styles from '../input.module.scss';

const InputError = ({ errors, currentError }) => {
  return (
    <div className={styles['error-message']}>
      {errors
        .filter(error => currentError === error.key)
        .map(error => error.message)}
    </div>
  );
};

InputError.displayName = 'InputError';
InputError.propTypes = {
  errors: PropTypes.array,
  currentError: PropTypes.string
};

export default InputError;
