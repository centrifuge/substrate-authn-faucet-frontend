const currentEnv = process.env.NODE_ENV;

const dev = {
  API_HOST: 'http://localhost:8080',
  GITHUB_CLIENT_ID: '9dffefab6a7f7cfd1efb',
  REDIRECT_URI: 'http://localhost:8000/github/callback',
  POLKASCAN_URI: 'https://polkascan.io/pre/centrifuge-amber-cc2/transaction/'
};
const prod = {
  API_HOST: process.env.API_HOST,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  REDIRECT_URI: process.env.REDIRECT_URI, // 'https://host.domain/github/callback',
  POLKASCAN_URI: process.env.POLKASCAN_URI //'https://polkascan.io/pre/centrifuge-amber-cc2/transaction/'
};

const config =
  currentEnv === 'production'
    ? prod
    : dev;

const baseOptions = {
  url: config.API_HOST,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
};

export { currentEnv, config, baseOptions };
