'use strict';

import baseConfig from './base';

let config = {
  api: {
    prefix: '//localhost:4700'
  },
  appEnv: 'dev'  // feel free to remove the appEnv property here
};

export default Object.freeze(Object.assign({}, baseConfig, config));
