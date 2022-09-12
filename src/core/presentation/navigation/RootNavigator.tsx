import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootRoutes} from './types';
import AuthenticationNavigator from './AuthenticationNavigator';

const Stack = createNativeStackNavigator<RootRoutes>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
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
