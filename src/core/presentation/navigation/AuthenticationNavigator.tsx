import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticationRoutes} from './types';

import {ConnectWalletScreen} from '@feature-auth/screens';

const Stack = createNativeStackNavigator<AuthenticationRoutes>();

const AuthenticationNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ConnectWallet" component={ConnectWalletScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
