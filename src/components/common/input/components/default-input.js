import React from 'react';
import PropTypes from 'prop-types';
import styles from '../input.module.scss';

const DefaultInput = ({
  id,
  isDisabled,
  type,
  value,
  placeholder,
  showError,
  onChange,
  onBlur
}) => {
  return (
    <input
      autoComplete="off"
      disabled={isDisabled}
      id={id}
      name={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={({ target: { value } }) => onChange(value)}
      onBlur={onBlur}
      className={`${showError ? styles.error : ''}`}
    />
  );
};

DefaultInput.displayName = 'DefaultInput';
DefaultInput.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'email']),
  value: PropTypes.string.isRequired,
  showError: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default DefaultInput;
