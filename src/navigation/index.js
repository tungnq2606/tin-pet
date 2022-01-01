import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../routes';
import {LoginScreen} from '../screens';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.TabNavigation} component={TabNavigation} />
        <Stack.Screen name={routes.LoginScreen} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
