import React from 'react';
import styles from './input.module.scss';
import PropTypes from 'prop-types';

export const renderField = ({
  label,
  meta: { error, touched, warning }
}) => (
  <div className={touched && error ? styles.dverror : null}>
    {label && <label className={styles.label}>{label}</label>}
    <div>
      {touched &&
        ((error && <div className={styles.error}>{error}</div>) ||
          (warning && <div>{warning}</div>))}
    </div>
  </div>
);
renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};
