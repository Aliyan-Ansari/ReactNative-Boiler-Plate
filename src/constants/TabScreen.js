import React from 'react';
import HomeScreen from '../Screens/Home/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import TabScreenLayout from '../layouts/TabScreenLayout';
import Register from '../Screens/Register/Register';
import Login from '../Screens/Login/Login';

export const stackScreens = [
  {
    name: 'Login',
    component: () => <Login />,
    linkText: 'Go To Login',
  },
  {
    name: 'Signup',
    component: () => <Register />,
    linkText: 'Go To Signup',
  },
];

export const tabScreens = [
  {
    name: 'Dashboard',
    component: () => <HomeScreen />,
    linkText: 'Go To Home',
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
