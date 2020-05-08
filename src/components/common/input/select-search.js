import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCurrentError } from './helpers.js';
import inputErrors from '../../../utils/input-errors';
import InputError from './components/input-error.js';
import { Box } from 'grommet';
import {SearchSelect} from '@centrifuge/axis-search-select';
import { FormField } from 'grommet';
import {AxisTheme} from '@centrifuge/axis-theme';

class SelectSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: props.isRequired
        ? [inputErrors.required].concat(props.extraErrors)
        : props.extraErrors,
      currentError: false,
      hasBlurred: false,
      isVirgin: true,
      defaultOptions: []
    };

  }

  componentDidMount () {
    const { options } = this.props;
    this.setState({ defaultOptions: options });
  }

  static getDerivedStateFromProps(props, state) {
    const { reset, forceValidation, value, options } = props;
    const { errors, defaultOptions } = state;

    if(options && options.length > 0 && defaultOptions.length === 0) {
      return { ...state, defaultOptions: options };
    }

    if (reset) {
      return {
        ...state,
        hasBlurred: false,
        isVirgin: true,
        currentError: false
      };
    }

    if (forceValidation) {
      return {
        ...state,
        currentError: getCurrentError(value, errors),
        isVirgin: false,
        hasBlurred: true
      };
    }

    return state;
  }


  render() {
    const {
      id,
      label,
      labelKey,
      isDisabled,
      value,
      placeholder,
      variant,
      options,
      ...otherProps
    } = this.props;
    const { hasBlurred, isVirgin, currentError, errors } = this.state;
    const showError = hasBlurred && !isVirgin && currentError ? true : false;
    return (

      <Box><AxisTheme><FormField label={placeholder}>
        <SearchSelect
          required
          {...otherProps}
          id={id}
          disabled={isDisabled}
          labelKey={labelKey}
          value={value}
          variant={variant}
          showError={showError}
          options={options}
          placeholder=''
          label={label}
        />
      </FormField></AxisTheme>
      <InputError errors={errors} currentError={currentError} />

      </Box>

    );
  }
}

// SelectSearch.displayName = 'SelectSearch';
SelectSearch.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any,
  labelColor: PropTypes.oneOf(['black', 'white']),
  value: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  forceValidation: PropTypes.bool,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  reset: PropTypes.bool,
  extraErrors: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      message: PropTypes.string,
      isError: PropTypes.func
    })
  ),
  placeholder: PropTypes.string
};

SelectSearch.defaultProps = {
  forceValidation: false,
  isDisabled: false,
  isRequired: false,
  reset: false,
  extraErrors: [],
  className: '',
  placeholder: '',
};

export default SelectSearch;
