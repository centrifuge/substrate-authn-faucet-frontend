import React from 'react';
import PropTypes from 'prop-types';
import styles from '../input.module.scss';

const Label = ({ id, label, color, className }) => {
  return (
    <label
      htmlFor={id}
      className={`${styles.label} ${styles[color]} ${className}`}
    >
      {label}
    </label>
  );
};

Label.displayName = 'Label';
Label.defaultProps = {
  className: '',
  color: 'black'
};
Label.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['darkest-blue', 'rose', 'black'])
};

export default Label;
