import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();



const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;