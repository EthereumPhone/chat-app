const fetch = require('node-fetch');
const AbortController = require('./AbortController');

global.fetch = fetch;
global.AbortController = AbortController;
