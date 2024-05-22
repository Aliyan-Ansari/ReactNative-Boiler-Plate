import 'react-native-gesture-handler';
import React from 'react';
// import AppNavigator from './src/Naivgation/AppNavigator';
import {ThemeProvider} from './src/ThemeContext';
import {StripeProvider} from '@stripe/stripe-react-native';
import {stripePublishableKey, tabs} from './src/constants/Constants';
import MainStackNavigator from './src/Naivgation/MainNavigator';

const App = () => {
  return (
    <StripeProvider publishableKey={stripePublishableKey}>
      <ThemeProvider>
        <MainStackNavigator />
      </ThemeProvider>
    </StripeProvider>
  );
};

export default App;
