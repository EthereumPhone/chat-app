import React, {useMemo, useRef} from 'react';
import {FlatList, Text, View} from 'react-native';
import {BottomSheetModal, BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {useCallback} from 'react';
import {observer} from 'mobx-react';
import {container} from 'tsyringe';
import FeatherIcon from 'react-native-vector-icons/Feather';

import ConversationsStyles from './ConversationsStyles';
import ConversationItem from '../components/ConversationItem';
import ConversationsViewModel from './ConversationsViewModel';
import {Conversation} from '../../domain/models';
import {Button} from '@components';
import CreateNewConversationSheet from '../components/CreateNewConversationSheet';
import ClientInfoCard from '../components/ClientInfoCard';
import {useNavigation} from '@react-navigation/native';
import {AuthenticatedRoutes} from '@navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const styles = ConversationsStyles();

type ConversationsNavigationProps = NativeStackNavigationProp<
  AuthenticatedRoutes,
  'Conversations'
>;

const ConversationsScreen: React.FC = () => {
  // Refs
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Navigation
  const navigation = useNavigation<ConversationsNavigationProps>();

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
        onPress={() => {
          navigation.navigate('Messages');
        }}
      />
    );
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <View>
        <Text style={styles.header}>Conversations</Text>
        {/* Client info */}
        <ClientInfoCard />
      </View>
    );
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 1, backgroundColor: 'grey', opacity: 0.4}} />;
  }, []);

  const handlePresentModalPress = useCallback(() => {
    console.log('Pressed');

    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <View style={styles.container}>
      {/* List of conversation */}
      <FlatList
        style={styles.list}
        data={viewModel.conversations}
        keyExtractor={item => item.peerAddress}
        renderItem={renderConversationItem}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContainer}
      />

      {/* FAB */}
      <Button.Icon
        icon={<FeatherIcon name="plus" size={20} color="white" />}
        style={styles.fab}
        onPress={handlePresentModalPress}
        label="Start chat"
        color="white"
      />

      {/* Create new conversation sheet */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={['50%']}
        backgroundStyle={{backgroundColor: '#2E2E2E'}}
        backdropComponent={props => (
          <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />
        )}>
        <CreateNewConversationSheet />
      </BottomSheetModal>
    </View>
  );
};

export default observer(ConversationsScreen);
