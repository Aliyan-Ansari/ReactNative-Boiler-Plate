// AppNavigator.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// import { AuthContext } from './AuthContext';
import {stackScreens} from '../constants/TabScreen';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  //   const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          // headerShown: false,
          animation: 'none',
        }}>
        {stackScreens.map((stack, index) => (
          <Stack.Screen
            name={stack.name}
            component={stack.component}
            key={`${stack.name},${index}`}
            options={
              stack.title
                ? {
                    title: stack.title,
                    fontFamily: 'Rubik-Medium',
                    headerShown: true,
                    headerStyle: {
                      fontFamily: 'Rubik-Medium',
                      // backgroundColor: isDarkMode ? '#010101' : '#FFFFFF', // Change header background color based on isDarkMode
                    },
                    // headerTintColor: isDarkMode ? '#FFFFFF' : '#000000', // Change header text color based on isDarkMode
                  }
                : {}
            }
          />
        ))}
        <Stack.Screen name="Home" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
