import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import CustomDrawer from '../Components/CustomDrawer/CustomDrawer';
import {darkMode, lightMode} from '../theme/theme';
import {useDarkMode} from '../ThemeContext';
import BottomTabs from './BottomTab';
import {appScreens, tabScreens} from '../constants/TabScreen';
import HomeScreen from '../Screens/Home/Home';
import ChatScreen from '../Screens/Chat/Chat';
import Settings from '../Screens/Settings/Settings';
import Payment from '../Screens/Payment/Payment';

const DrawerContent = props => <CustomDrawer {...props} />;
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const navigation = useNavigation();
  const {isDarkMode} = useDarkMode(); // Get isDarkMode state from context
  const theme = isDarkMode ? darkMode : lightMode; // Get theme based on Mode

  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.headerBackgroundColor,
        },
        headerTintColor: theme.headerTextColor,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="Chat"
        component={ChatScreen}
        options={{headerShown: true, title: 'Chats'}}
      />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Payment" component={Payment} />
      {/* <Drawer.Screen name="Tabs" key={'tabs'} component={BottomTabs} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
