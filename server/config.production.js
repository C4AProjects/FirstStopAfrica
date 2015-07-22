var p = require('../package.json');
var version = p.version.split('.').shift();
module.exports = {
  restApiRoot: '/api' + (version > 0 ? '/v' + version : ''),
  host: process.env.HOST || 'firstop.c4asolution.com',
  port: process.env.NODE_PORT || 3000,
  cors: true
};
