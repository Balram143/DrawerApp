import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';



import Home from '../../screens/Home';
import MapScreen from '../Map';
import Library from '../../screens/Library';

const Tab = createBottomTabNavigator();


const screenOptions = (route, color) => {
    let iconName;
  
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Map':
        iconName = 'find';
        break;
      case 'Profile':
        iconName = 'user';
        break;
      default:
        break;
    }
  
    return <Icon name={iconName} color={color} size={24} />;
  };

const TabNavigator = () => {
return (
    <Tab.Navigator
    screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
    })}>
      <Tab.Screen options={{headerShown: false }} name="Home" component={Home} />
      <Tab.Screen options={{headerShown: false }} name="Map" component={MapScreen} />
      <Tab.Screen options={{headerShown: false }} name="Profile" component={Library} />
    </Tab.Navigator>
);
};

export default TabNavigator;