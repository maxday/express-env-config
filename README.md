# express-env-config

express-env-config is a middleware for handling  ***different configurations*** in ***different environments*** for your ***front-end app*** served by express.js

Indeed, depending of an environment variable value, a GET request to your config will serve the right config file.

Exemple : if you set CURRENT_ENV to "staging", GET /appConfig.js will serve /staging.appConfig.js

## Installation

```
npm install express-env-config
``` 

## Usage

In your `server.js` file

```
const envConfig = require('express-env-config');
...
app.use(envConfig()); 
```
or using options (see below for option details)
```
const envConfig = require('express-env-config');
...
const options = {
  envVarName: 'MY_CURRENT_ENV',
  configFileName: 'conf.js' 
}
app.use(envConfig(options)); 
```

## Options


| Option name      | Default value        | Description
| -                | -                    | -
| envVarName       | CURRENT_ENV          | name of the environment variable to read in order to detect in wich environment the app is deployed
| configFileName   | appConfig.js         | name of the config file your front-end app is fetching
| configDirectory  | \<rootAppDir>/config | name of the directory where all configs are stored


## Test

```
npm test
```


