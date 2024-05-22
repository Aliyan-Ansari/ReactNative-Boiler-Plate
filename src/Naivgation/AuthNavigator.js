import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/Login/Login';
import SignupScreen from '../Screens/Register/Register';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
