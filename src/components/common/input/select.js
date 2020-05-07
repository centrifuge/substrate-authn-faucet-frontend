import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCurrentError } from './helpers.js';
import inputErrors from '../../../utils/input-errors';
import InputError from './components/input-error.js';
import { Select, Box } from 'grommet';

class SelectOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: props.isRequired
        ? [inputErrors.required].concat(props.extraErrors)
        : props.extraErrors,
      currentError: false,
      hasBlurred: false,
      isVirgin: true
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { reset, forceValidation, value } = props;
    const { errors } = state;

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

  handleBlur() {
    const { value, onInputChange } = this.props;
    const { errors } = this.state;

    const error = getCurrentError(value, errors);
    this.setState({
      hasBlurred: true,
      isVirgin: false,
      currentError: error
    });
    onInputChange(value, error);
  }

  handleChange(value) {
    const { onInputChange } = this.props;
    const { errors } = this.state;

    const error = getCurrentError(value, errors);
    this.setState({ currentError: error });
    onInputChange(value.value, error);
  }

  render() {
    const {
      className,
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
      <Box wrap align="center" width="medium">
        <Select
          {...otherProps}
          id={id}
          disabled={isDisabled}
          labelKey={labelKey}
          value={value}
          variant={variant}
          showError={showError}
          options={options}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          placeholder={placeholder}
          label={label}
          className={className}
          margin="normal"
        />
        <InputError errors={errors} currentError={currentError} />
      </Box>
    );
  }
}

SelectOption.displayName = 'SelectOption';
SelectOption.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any,
  labelColor: PropTypes.oneOf(['black', 'white']),
  value: PropTypes.string,
  variant: PropTypes.string,
  onInputChange: PropTypes.func,
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

SelectOption.defaultProps = {
  forceValidation: false,
  isDisabled: false,
  isRequired: false,
  reset: false,
  variant: 'filled',
  extraErrors: [],
  className: '',
  placeholder: '',
};

export default SelectOption;
