import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {RootRoutes} from './types';
import AuthenticationNavigator from './AuthenticationNavigator';
import {useColorScheme} from 'react-native';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
