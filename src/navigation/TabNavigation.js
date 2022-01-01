import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import routes from '../routes';
import {
  ChatsScreen,
  DiscoverScreen,
  FavoritesScreen,
  ProfileScreen,
} from '../screens';
import {colors} from '../constants';
import {scale} from '../utils/resolutions';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.system,
      }}>
      <Tab.Screen
        name={routes.DiscoverScreen}
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="map-marker-outline"
              color={color}
              size={scale(22)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.FavoritesScreen}
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              name="ios-heart-outline"
              color={color}
              size={scale(23)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ChatsScreen}
        component={ChatsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              name="md-chatbubble-ellipses-outline"
              color={color}
              size={scale(20)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ProfileScreen}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              name="ios-person-outline"
              color={color}
              size={scale(20)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
