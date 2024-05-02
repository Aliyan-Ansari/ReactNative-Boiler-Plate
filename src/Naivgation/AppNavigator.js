// AppNavigator.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {stackScreens} from '../constants/TabScreen';
import RubikMedium from '../../assets/fonts/Rubik-Medium.ttf';
import DrawerNavigation from './DrawerNavigation';
import {useDarkMode} from '../ThemeContext'; // Import useDarkMode hook
import {darkMode, lightMode} from '../theme/theme'; // Import theme objects

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {isDarkMode} = useDarkMode(); // Get isDarkMode state from context
  const theme = isDarkMode ? darkMode : lightMode; // Get theme based on isDarkMode

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          headerStyle: {
            fontFamily: RubikMedium,
            backgroundColor: theme.headerBackgroundColor, // Change header background color based on theme
          },
          headerTintColor: theme.headerTextColor, // Change header text color based on theme
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
                    fontFamily: RubikMedium,
                    headerShown: true,
                    headerStyle: {
                      fontFamily: RubikMedium,
                      backgroundColor: theme.headerBackgroundColor, // Change header background color based on theme
                    },
                    headerTintColor: theme.headerTextColor, // Change header text color based on theme
                  }
                : {}
            }
          />
        ))}
        <Stack.Screen name="Dashboard" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
