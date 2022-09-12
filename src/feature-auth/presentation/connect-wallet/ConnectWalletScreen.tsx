import React, {useMemo} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {container} from 'tsyringe';
import ConnectWalletStyles from './ConnectWalletStyles';
import ConnectWalletViewModel from './ConnectWalletViewModel';
import {Button} from '@components';

import FeatherIcon from 'react-native-vector-icons/Feather';

const styles = ConnectWalletStyles();

const ConnectWalletScreen: React.FC = props => {
  // ViewModel
  const viewModel = useMemo(
    () => container.resolve(ConnectWalletViewModel),
    [],
  );

  return (
    <ImageBackground
      source={require('../../../../assets/images/background.jpeg')}
      style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Decentralized Chat</Text>
        <Text style={styles.subtitle}>
          XMTP integration that decentralizes messaging at the OS level.
        </Text>
        <View style={styles.buttons}>
          <Button.Icon
            style={{...styles.connectBtn}}
            icon={<FeatherIcon name="credit-card" size={20} color="white" />}
            onPress={() => {}}
            label="Connect wallet"
            color="white"
          />
          <View style={styles.buttons2}>
            <Button.Icon
              style={{...styles.iconButton, marginEnd: 4}}
              icon={<FeatherIcon name="user" size={20} color="black" />}
              onPress={() => {}}
              label="Guest"
              backgroundColor="white"
              color="black"
            />
            <Button.Icon
              style={{...styles.iconButton, marginStart: 4}}
              icon={<FeatherIcon name="download" size={20} color="white" />}
              onPress={() => {}}
              label="Import"
              backgroundColor="transparent"
              color="white"
              borderColor="white"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default ConnectWalletScreen;
