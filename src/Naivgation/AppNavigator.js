// AppNavigator.js
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { AuthContext } from './AuthContext';
import LoginScreen from './../Screens/Login/Login';
import SignupScreen from './../Screens/Register/Register';
// import DashboardScreen from './screens/DashboardScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  //   const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* {user ? ( */}
        {/* //   <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
        {/* ) : ( */}
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
