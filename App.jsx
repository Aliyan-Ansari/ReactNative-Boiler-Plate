import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/Naivgation/AppNavigator';
import {ThemeProvider} from './src/ThemeContext';
import {StripeProvider} from '@stripe/stripe-react-native';
import {stripePublishableKey} from './src/constants/Constants';

const App = () => {
  return (
    <StripeProvider publishableKey={stripePublishableKey}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </StripeProvider>
  );
};

export default App;
