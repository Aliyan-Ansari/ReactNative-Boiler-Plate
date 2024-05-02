import React from 'react';
import HomeScreen from '../Screens/Home/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Register from '../Screens/Register/Register';
import Login from '../Screens/Login/Login';
import Settings from '../Screens/Settings/Settings';
import Payment from '../Screens/Payment/Payment';
import ChatScreen from '../Screens/Chat/Chat';

export const stackScreens = [
  {
    name: 'Login',
    component: Login,
    linkText: 'Go To Login',
  },
  {
    name: 'Signup',
    component: Register,
    linkText: 'Go To Signup',
  },
  // {
  //   name: 'Dashboard',
  //   component: HomeScreen,
  //   linkText: 'Go To Home',
  // },
  // {
  //   name: 'Settings',
  //   component: Settings,
  //   linkText: 'Go To Settings',
  // },
  // {
  //   name: 'Payment',
  //   component: Payment,
  //   linkText: 'Go To Payment',
  // },
];

export const tabScreens = [
  {
    name: 'Home',
    component: HomeScreen,
    linkText: 'Go To Home',
  },
  {
    name: 'Settings',
    component: Settings,
    linkText: 'Go To Settings',
  },
  {
    name: 'Payment',
    component: Payment,
    linkText: 'Go To Payment',
  },
  {
    name: 'Chat',
    component: ChatScreen,
    linkText: 'Go To Chat',
  },
];

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
