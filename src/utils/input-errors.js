import { EMAIL_REGEX } from './regex';

const inputErrors = {
  required: {
    key: 'empty',
    message: 'This field is required.',
    isError: value => !value || value.length === 0
  },
  addressValidation: {
    key: 'address',
    message: 'Address must be 48 characters.',
    isError: value => value.length < 48
  },
  emailValidation: {
    key: 'email',
    message: 'Email is not valid.',
    isError: value => value.length > 0 && !EMAIL_REGEX.test(value)
  }
};

export default inputErrors;
