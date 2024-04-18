import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../Components/CustomDrawer/CustomDrawer';
import {tabScreens} from '../constants/TabScreen';
// import BottomTabsNavigation from './BottomTabsNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      initialRouteName="Dashboard"
      useLegacyImplementation={false}
      //   screenOptions={{headerShown: false}}
    >
      {tabScreens.map((tab, index) => (
        <Drawer.Screen name={tab.name} key={`${(tab.name, index)}`}>
          {tab.component}
        </Drawer.Screen>
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
