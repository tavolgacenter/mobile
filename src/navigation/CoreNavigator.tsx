import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as screens from '@/screens';
import {CoreTabsParamList, CORE_ROUTES} from './types';

const Tab = createBottomTabNavigator<CoreTabsParamList>();

const icons = ['home', 'dice-four', 'user-circle'].map(
  name =>
    ({color, size}: {focused: boolean; color: string; size: number}) =>
      <Icon name={name} color={color} size={size} solid />,
);

export const CoreNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={CORE_ROUTES.MAIN}
      // component={screens.MainScreen}
      component={screens.EventsScreen}
      options={{tabBarIcon: icons[0]}}
    />
    <Tab.Screen
      name={CORE_ROUTES.PROFILE}
      component={screens.ProfileScreen}
      options={{tabBarIcon: icons[2]}}
    />
  </Tab.Navigator>
);
