import React from 'react';
import PropTypes from 'prop-types';
import styles from '../input.module.scss';

const Option = ({ item: { title, id }, selectItem }) => (
  <li
    className={styles.option}
    key={id}
    onClick={() => {
      selectItem(title, id);
    }}
  >
    {title}
  </li>
);

Option.displayName = 'Option';
Option.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }),
  selectItem: PropTypes.func.isRequired
};

export default Option;
