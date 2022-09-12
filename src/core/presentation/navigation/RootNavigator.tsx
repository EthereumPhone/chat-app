import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';

import {RootRoutes} from './types';
import AuthenticationNavigator from './AuthenticationNavigator';
import AuthenticatedNavigator from './AuthenticatedNavigator';

const Stack = createNativeStackNavigator<RootRoutes>();

const RootNavigator: React.FC = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Authentication"
          component={AuthenticationNavigator}
        />
        <Stack.Screen name="Authenticated" component={AuthenticatedNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
