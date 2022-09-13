import {Button} from '@components';
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const CreateNewConversationSheet: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Create new conversation</Text>

      <View style={styles.searchBar}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Wallet address" />
        </View>

        <Button.Icon
          icon={<FeatherIcon name="arrow-right" size={22} />}
          onPress={() => {}}
          style={{height: 45, width: 45, paddingHorizontal: 0}}
        />
      </View>
    </View>
  );
};
export default CreateNewConversationSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    marginHorizontal: 16,
    fontSize: 20,
    color: 'white',
    marginTop: 16,
  },
  searchBar: {
    marginHorizontal: 16,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: '#383838',
    borderRadius: 40,
    paddingHorizontal: 12,
    flex: 1,
    marginEnd: 16,
  },
});
