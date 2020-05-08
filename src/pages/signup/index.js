import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Heading, Box, Button, Text} from 'grommet';

import queryString from 'query-string';
import { push } from 'connected-react-router';
import Success from '../../components/Success';
import { signupRequest, updateField, getRandomString, setStateError, getCountryList } from './actions';
import Input from '../../components/common/input/input.js';
import SelectOption from '../../components/common/input/select.js';
import SelectSearch from '../../components/common/input/select-search.js';
import CheckBox from '../../components/common/input/checkbox.js';
import { config } from '../../config';
import inputErrors from '../../utils/input-errors';
import { AxisTheme } from '@centrifuge/axis-theme';
import Disclaimer from '../../components/Disclaimer';


class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countryList: [],
      usCitezenLookup: [{ label: 'Yes', value: true},
        { label: 'No', value: false}]
    };
  }

  async componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    const { updateField, getCountryList } = this.props;
    const countryList = await getCountryList();
    this.setState({ countryList });
    updateField('code', values.code);
    if(values && values.state) {
      this.validateState(values.state);
    }
  }

  async validateState (state) {
    const randomString = await getRandomString();
    if(state !== randomString) {
      const { push, setStateError } = this.props;
      await setStateError('Something went wrong please login again.');
      push('/');
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { signupRequest } = this.props;
    await signupRequest();
  }

  render() {
    const {
      signupForm: { forceValidation, reset, form },
      updateField,
      error,
      success
    } = this.props;

    const { countryList, usCitezenLookup } = this.state;
    return (
      <Box align="center" direction="column">
        <Box>
          <form onSubmit={this.handleSubmit}>

            <Box pad={{top: 'large'}} align="start" gap="none">
              <Box direction="row" wrap align="start">
                <Heading margin={{ top: 'none' }} size="small">Welcome to the</Heading>
              </Box>
              <Box direction="row" wrap align="start">
                <Heading margin={{ top: 'none' }} size="small">Centrifuge Authenticated Faucet</Heading>
              </Box>
            </Box>
            <Box pad={{top: 'large', bottom: 'large'}} align="start" gap="none">
              <Box direction="row" wrap align="start" gap="large">
                <Text size="large">Please add a few more detail to continue:</Text>
              </Box>
            </Box>

            <Box direction="row" gap="large">
              <Box  gap="medium" width="50%">
                <Input
                  type="text"
                  id='full_name'
                  value={form.full_name}
                  forceValidation={forceValidation}
                  reset={reset}
                  placeholder='Your Name'
                  onInputChange={(value, error) => {
                    updateField('full_name', value, error);
                  }}
                />

                <Input
                  type="text"
                  id='company_name'
                  value={form.company_name}
                  forceValidation={forceValidation}
                  reset={reset}
                  placeholder='Company'
                  onInputChange={(value, error) => {
                    updateField('company_name', value, error);
                  }}
                />

                <SelectOption
                  required
                  placeholder="Are you a US Citizen? *"
                  options={usCitezenLookup}
                  labelKey="label"
                  value={form.us_citizen}
                  forceValidation={forceValidation}
                  reset={reset}
                  isRequired
                  onInputChange={(value, error) => {
                    updateField('us_citizen', value, error);
                  }}
                />

              </Box>
              <Box  gap="medium" width="50%">
                <Input
                  type="text"
                  id='email'
                  value={form.email}
                  forceValidation={forceValidation}
                  reset={reset}
                  extraErrors={inputErrors.emailValidation}
                  placeholder='Email'
                  onInputChange={(value, error) => {
                    updateField('email', value, error);
                  }}
                />
                <SelectSearch
                  size="medium"
                  required
                  id="country"
                  placeholder="Country of Operation *"
                  options={countryList}
                  labelKey="label"
                  forceValidation={forceValidation}
                  reset={reset}
                  isRequired
                  value={form.country}
                  onChange={(value, error) => {
                    updateField('country', value, error);
                  }}
                />

                <Input
                  type="text"
                  id='address'
                  value={form.address}
                  forceValidation={forceValidation}
                  extraErrors={inputErrors.addressValidation}
                  reset={reset}
                  isRequired
                  placeholder='Centrifuge Chain Address **'
                  onInputChange={(value, error) => {
                    updateField('address', value, error);
                  }}
                />
              </Box>
            </Box>

            <Box wrap pad={{ top: 'medium', left: 'small' }} align="start" gap="small">
              <AxisTheme>
                <CheckBox
                  id='toc_and_privacy'
                  label={<label>You agree to the <a href='https://centrifuge.io/data-privacy-policy'>Terms of Service</a> and the <a href="https://centrifuge.io/data-privacy-policy">Privacy Policy</a></label>}
                  value={form.toc_and_privacy}
                  isRequired
                  reset={reset}
                  forceValidation={forceValidation}
                  onInputChange={(value, error) => {
                    updateField('toc_and_privacy', value, error);
                  }}
                />
              </AxisTheme>
            </Box>

            <Box pad={{ top: 'medium', left: 'medium' }} align="start" gap="large">
              <Box direction="row" wrap align="start" gap="large">
                <Text>* This faucet is not currently available for US Citizens or Residents or Residents of China or South Korea</Text>
              </Box>
            </Box>
            <Box pad={{ top: 'xxsmall', left: 'medium' }} align="start" gap="large">
              <Box direction="row" wrap align="start" gap="large">
                <Text>** if you don&apos;t have Centrifuge Chain address, create one using our documentation</Text>
              </Box>
            </Box>
            <Box pad="large" align="center" gap="large">
              <Button
                primary
                label="Press to Pour"
                type='submit'/>
            </Box>
            <Box pad={{ top: 'small', left: 'medium' }} align="start" gap="large">
              <Box direction="row" wrap align="start" gap="small">
                {error && <Text style={{ color: 'red' }}>{error.message}</Text> }
              </Box>
            </Box>

            {success && <Success success={success} polkascanUri={config.POLKASCAN_URI}></Success> }

            <Box pad="small" align="start" gap="large">
              <Disclaimer />
            </Box>
          </form>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  signupForm: state.signupReducer.signupForm,
  error: state.signupReducer.error,
  success: state.signupReducer.success
});

const mapDispatchToProps = {
  signupRequest,
  updateField,
  getRandomString,
  push,
  setStateError,
  getCountryList
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
