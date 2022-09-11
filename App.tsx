import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import NodeJS from 'nodejs-mobile-react-native';

const App = () => {
  useEffect(() => {
    NodeJS.start('main.js');
    NodeJS.channel.post('init');

    NodeJS.channel.addListener('error', error => {
      console.log(error);
    });

    NodeJS.channel.addListener('xmtp-intialised', () => {
      console.info('XMTP intialised');
    });
    NodeJS.channel.addListener('new-wallet', privateKey => {
      console.log('new-wallet', privateKey);
    });
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello</Text>
    </View>
  );
};

export default App;
