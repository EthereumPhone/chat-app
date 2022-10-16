import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface MessagesHeaderProps {
  profileImage: string;
  adddress: string;
}

const MessagesHeader: React.FC<MessagesHeaderProps> = ({
  adddress,
  profileImage,
}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => {}}>
        <FeatherIcon name="arrow-left" size={24} style={{marginEnd: 16}} />
      </TouchableOpacity>
      <Image
        source={{uri: profileImage}}
        style={{height: 35, width: 35, borderRadius: 17.5}}
      />
      <Text
        style={{marginHorizontal: 16, fontSize: 16, color: 'white', flex: 1}}
        numberOfLines={1}>
        {adddress}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#282828',
  },
});

export default MessagesHeader;
