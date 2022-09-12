import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ConnectWalletScreen: React.FC = props => (
  <View style={styles.container}>
    <Text>ConnectWalletScreen</Text>
  </View>
);
export default ConnectWalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
