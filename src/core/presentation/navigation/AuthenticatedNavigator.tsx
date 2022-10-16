import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthenticatedRoutes} from './types';
import {ConversationsScreen, MessagesScreen} from '@feature-chat/screens';

const Stack = createNativeStackNavigator<AuthenticatedRoutes>();

const AuthenticatedNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Conversations"
        component={ConversationsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
