import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../Components/CustomDrawer/CustomDrawer';
// import {tabScreens} from '../constants/TabScreen';
import {darkMode, lightMode} from '../theme/theme';
import {useDarkMode} from '../ThemeContext';
import BottomTabs from './BottomTab';
import {appScreens} from '../constants/TabScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const {isDarkMode} = useDarkMode(); // Get isDarkMode state from context
  const theme = isDarkMode ? darkMode : lightMode; // Get theme based on Mode
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      initialRouteName="Dashboard"
      // useLegacyImplementation={false}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          // fontFamily: 'RubikMedium',
          backgroundColor: theme.headerBackgroundColor,
        },
        headerTintColor: theme.headerTextColor,
        animation: 'none',
      }}>
      {appScreens.map((tab, index) => (
        <Drawer.Screen
          name={tab.name}
          key={`${(tab.name, index)}`}
          component={tab.component}
        />
      ))}
      <Drawer.Screen name="Dashboard" component={BottomTabs} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
