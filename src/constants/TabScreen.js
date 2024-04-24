import React from 'react';
import HomeScreen from '../Screens/Home/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Register from '../Screens/Register/Register';
import Login from '../Screens/Login/Login';
import Settings from '../Screens/Settings/Settings';
import Payment from '../Screens/Payment/Payment';

export const stackScreens = [
  {
    name: 'Login',
    component: Login, // Remove the arrow function
    linkText: 'Go To Login',
  },
  {
    name: 'Signup',
    component: Register, // Remove the arrow function
    linkText: 'Go To Signup',
  },
  {
    name: 'Dashboard',
    component: HomeScreen, // Remove the arrow function
    linkText: 'Go To Home',
  },
  {
    name: 'Settings',
    component: Settings, // Remove the arrow function
    linkText: 'Go To Settings',
  },
  {
    name: 'Payment',
    component: Payment, // Remove the arrow function
    linkText: 'Go To Payment',
  },
];

export const tabScreens = [];

export const tabIconGenerator = ({route, size, color}) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Downloads':
      iconName = 'cloud-download';
      break;
    case ' ':
      iconName = 'logo-youtube';
      break;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};
