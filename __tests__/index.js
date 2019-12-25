const envConfig = require('../index');

describe('envConfig', () => {
  it('should call next since original url does not contain appConfig.js', () => {
    const req = {
      originalUrl: 'coucou'
    }
    const fakeNext = jest.fn();
    envConfig()(req, {}, fakeNext);
    expect(fakeNext).toBeCalled();
  });

  it('should call sendStatus 500 since original url contain appConfig.js but env var is not set', () => {
    const req = {
      originalUrl: 'https://myApp/appConfig.js'
    }
    const res = {
      sendStatus: jest.fn()
    }
    envConfig()(req, res, null);
    expect(res.sendStatus).toBeCalled();
  });

  it('should call sendFile since original url contain appConfig.js and env var is set', () => {
    const req = {
      originalUrl: 'https://myApp/appConfig.js'
    }
    process.env.CURRENT_ENV = 'local';
    const res = {
      sendFile: jest.fn()
    }
    envConfig()(req, res, null);
    expect(res.sendFile).toBeCalled();
  });
});