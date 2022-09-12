import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {container} from 'tsyringe';
import ConnectWalletStyles from './ConnectWalletStyles';
import ConnectWalletViewModel from './ConnectWalletViewModel';
import {Button} from '@components';

const styles = ConnectWalletStyles();

const ConnectWalletScreen: React.FC = props => {
  // ViewModel
  const viewModel = useMemo(
    () => container.resolve(ConnectWalletViewModel),
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Decentralized Chat</Text>
      <Text style={styles.subtitle}>
        XMTP integration that decentralizes messaging at the OS level.
      </Text>
      <View style={styles.buttons}>
        <Button.Filled label="Connect Wallet" onPress={() => {}} />
      </View>
    </View>
  );
};
export default ConnectWalletScreen;
