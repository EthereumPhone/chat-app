import React from 'react';
import {useMemo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {createShortAddress, formatDate} from '../../utils';

interface ConversationItemProps {
  profileImage?: string;
  address: string;
  lastMessage: string;
  timestamp: Date;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  address,
  lastMessage,
  timestamp,
  profileImage,
}) => {
  // Memos
  const shortAddress = useMemo(() => {
    return createShortAddress(address);
  }, [address]);

  const date = useMemo(() => {
    return formatDate(timestamp);
  }, [timestamp]);

  return (
    <TouchableOpacity
      style={{padding: 16, flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={{uri: profileImage}}
        style={{height: 50, width: 50, borderRadius: 25}}
      />
      <View style={{marginStart: 16, flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'white', fontSize: 16}}>{shortAddress}</Text>
          <Text>{date}</Text>
        </View>
        <Text style={{marginTop: 2}}>{lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ConversationItem;
