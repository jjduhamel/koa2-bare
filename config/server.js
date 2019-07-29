import _ from 'lodash';

const defaultSettings = {
  addr: '127.0.0.1',
  port: 3000
};

const modeSettings = {
  test: {
    addr: '127.0.0.1',
    port: 3001
  },
  production: {
    addr: '0.0.0.0',
    port: 8000
  }
};

const envSettings = {
  addr: process.env.APP_LISTEN,
  port: process.env.APP_PORT
};

export default {
  ..._.pickBy(defaultSettings),
  ..._.pickBy(modeSettings[process.env.NODE_ENV]),
  ..._.pickBy(envSettings) };
