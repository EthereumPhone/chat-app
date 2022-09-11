const unorm = require('unorm');
const fetch = require('node-fetch');
const AbortController = require('./AbortController');

global.fetch = fetch;
global.AbortController = AbortController;
// "NFC", "NFD", "NFKC", or "NFKD"
global.String.prototype.normalize = function (type) {
  switch (type) {
    case 'NFC':
      return unorm.nfc(this);
    case 'NFD':
      return unorm.nfd(this);
    case 'NFKC':
      return unorm.nfkc(this);
    case 'NFKD':
      return unorm.nfkd(this);
  }
};
