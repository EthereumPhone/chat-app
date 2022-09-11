require('./utils/shim');

const {Client} = require('@xmtp/xmtp-js');
const {Wallet} = require('ethers');
const Bridge = require('./utils/bridge');

let wallet;
let xmtpClient;

// Initialise wallet and client
Bridge.receive('init', async privateKey => {
  try {
    if (privateKey) {
      wallet = new Wallet(privateKey);
    } else {
      wallet = Wallet.createRandom();
      Bridge.send('new-wallet', wallet.privateKey);
    }

    xmtpClient = await Client.create(wallet);
    Bridge.send('xmtp-intialised');
  } catch (error) {
    Bridge.send('error', error.toString());
  }
});

Bridge.receive('send-message', async message => {
  const conversation = await xmtpClient.conversations.newConversation(
    message.toAddress,
  );
  await conversation.send(message.text);
});

Bridge.receive('listen-to-address', async address => {
  const conversation = await xmtpClient.conversations.newConversation(address);
  for await (const message of await conversation.streamMessages()) {
    console.log(`[${message.senderAddress}]: ${message.content}`);
    Bridge.send('new-message', {
      senderAddress: message.senderAddress,
      content: message.content,
      sent: message.sent,
    });
  }
});
