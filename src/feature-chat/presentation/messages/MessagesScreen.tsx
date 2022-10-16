import React, {useCallback} from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import MessagesHeader from '../components/MessagesHeader';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {createShortAddress} from '../../utils';

const MessagesScreen: React.FC = () => {
  // Callbacks
  const renderHeader = useCallback(() => {
    return (
      <MessagesHeader
        profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5qNt163W2WKuIwTrYCVWOZxqotw8zxcm_w&usqp=CAU"
        adddress="0x3A341BB404E97708a9D8eBb7a1A4783332877209"
      />
    );
  }, []);

  const renderFooter = useCallback(() => {
    return (
      <View
        style={{
          borderColor: 'grey',
          borderWidth: 1,
          borderRadius: 24,
          paddingStart: 12,
          paddingEnd: 4,
          marginHorizontal: 8,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        <TextInput placeholder="Type something..." style={{flex: 1}} />
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: '#9667DD',
            padding: 8,
            borderRadius: 40,
            marginVertical: 4,
          }}>
          <FeatherIcon name="arrow-up" size={20} />
        </TouchableOpacity>
      </View>
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      <FlatList
        style={{flex: 1}}
        data={['Hii 🙂', 'How are you?'].reverse()}
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
        inverted
        contentContainerStyle={{padding: 16}}
        renderItem={({item}) => {
          return (
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5qNt163W2WKuIwTrYCVWOZxqotw8zxcm_w&usqp=CAU',
                }}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 25,
                }}
              />
              <View style={{marginHorizontal: 8, alignItems: 'flex-start'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'rgb(150, 103, 221)',
                      padding: 4,
                      paddingHorizontal: 8,
                      borderRadius: 20,
                      backgroundColor: 'rgba(150, 103, 221, 0.2)',
                    }}>
                    <Text
                      style={{color: 'rgb(150, 103, 221)', fontWeight: '500'}}>
                      {createShortAddress(
                        '0x3A341BB404E97708a9D8eBb7a1A4783332877209',
                      )}
                    </Text>
                  </View>
                  <Text style={{marginStart: 8}}>9:07 AM</Text>
                </View>
                <Text
                  style={{
                    marginTop: 8,
                    marginStart: 8,
                    color: 'white',
                    fontSize: 16,
                  }}>
                  {item}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default MessagesScreen;
