const path = require('path');

const envConfig = (options) => {
  const configEnvVarName = options && options.envVarName || 'CURRENT_ENV';
  const configDirectory = options && options.configDirectory || path.join(__dirname, '../../config');
  const configFileName = options && options.configFileName || 'appConfig.js';

  return (req, res, next) => {
    if(req.originalUrl.endsWith(`/${configFileName}`)) {
      if(process.env.hasOwnProperty(configEnvVarName)) {
        const configToServe = `${process.env[configEnvVarName]}.${configFileName}`;
        res.sendFile(path.join(configDirectory, configToServe));
      } else {
        res.sendStatus(500);
      }
    } else {
      next();
    }
  }
};

module.exports = envConfig;