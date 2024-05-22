import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthNavigator';
import DrawerNavigation from './DrawerNavigation';
import Payment from '../Screens/Payment/Payment';
import BottomTabs from './BottomTab';
import {tabScreens} from '../constants/TabScreen';

const MainStack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Auth"
        screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Auth" component={AuthStackNavigator} />
        <MainStack.Screen name="App" component={DrawerNavigation} />
        {/* <MainStack.Screen name="App" key={'tabs'} component={BottomTabs} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
