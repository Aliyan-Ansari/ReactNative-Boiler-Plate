import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './src/Naivgation/AppNavigator';
import {ThemeProvider} from './src/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
