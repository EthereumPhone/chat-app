import React from 'react';
import {FlatList, View} from 'react-native';

import ConversationsStyles from './ConversationsStyles';
import ConversationItem from '../components/ConversationItem';
import {observer} from 'mobx-react';
import {useMemo} from 'react';
import {container} from 'tsyringe';
import ConversationsViewModel from './ConversationsViewModel';
import {useCallback} from 'react';
import {Conversation} from '../../domain/models';

const styles = ConversationsStyles();

const ConversationsScreen: React.FC = () => {
  // ViewModel
  const viewModel = useMemo(() => {
    return container.resolve(ConversationsViewModel);
  }, []);

  // Callbacks
  const renderConversationItem = useCallback(({item}: {item: Conversation}) => {
    return (
      <ConversationItem
        address={item.peerAddress}
        lastMessage={item.lastMessage}
        timestamp={item.date}
        profileImage={item.profileImage}
      />
    );
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 1, backgroundColor: 'grey', opacity: 0.4}} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={viewModel.conversations}
        keyExtractor={item => item.peerAddress}
        renderItem={renderConversationItem}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default observer(ConversationsScreen);
