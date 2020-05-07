# Substrate Authenticated Faucet Frontend

## Local Development
To install and run
```
yarn install
yarn start
```
Will be running on _localhost:8000_

## Production
```
yarn run build
netlify deploy
netlify deploy --prod
```
You can install Netlify using `npm install netlify-cli -g`

# Environment Variables

Variables are location at _src/config/index.js_

|Name| Explanation|
|----|------------|
|API_HOST| Backend API URL |
|GITHUB_CLIENT_ID|Github client to get code|
|REDIRECT_URI|Github will redirect to this URL with code|
|POLKASCAN_URI|Polkascan link to verify transaction completion|
