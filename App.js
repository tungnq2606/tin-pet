import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from './src/routes';
import {LoginScreen} from './src/screens';
import MainStack from './src/navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return <MainStack />;
};

export default App;
