import {Button} from '@components';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {createShortAddress} from '../../utils';

const ClientInfoCard: React.FC = () => (
  <View style={styles.container}>
    <Image
      style={styles.profileImage}
      source={{
        uri: `https://i.pinimg.com/736x/e5/a0/a9/e5a0a90cfd5e038fd2e373b16982e0f5.jpg`,
      }}
    />
    <View style={styles.connectedAs}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Octicons name="dot-fill" size={22} color="#61E979" />
        <Text style={styles.connectedAsText}>Connected as:</Text>
      </View>
      <Text style={styles.address}>
        {createShortAddress('0x3A341BB404E97708a9D8eBb7a1A4783332877209')}
      </Text>
    </View>

    <Button.Filled label="DEV" onPress={() => {}} style={{borderRadius: 10}} />

    <FeatherIcon name="settings" size={24} style={{marginStart: 16}} />
  </View>
);
export default ClientInfoCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#32006E',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  connectedAs: {
    marginHorizontal: 8,
    flex: 1,
  },
  connectedAsText: {
    color: '#61E979',
    fontWeight: '700',
    marginStart: 4,
    marginBottom: 2,
  },
  address: {
    marginStart: 16,
    fontWeight: '700',
    color: 'white',
    letterSpacing: 2,
  },
});
