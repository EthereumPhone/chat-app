const rn_bridge = require('rn-bridge');

class Bridge {
  send = (event, data) => {
    rn_bridge.channel.post(event, data);
  };

  receive = (event, callback) => {
    rn_bridge.channel.on(event, callback);
  };
}

const bridge = new Bridge();
Object.freeze(bridge);

module.exports = bridge;
