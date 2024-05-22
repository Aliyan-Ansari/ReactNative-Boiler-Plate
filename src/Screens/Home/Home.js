import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getStyles} from './style';
import {useDarkMode} from '../../ThemeContext';
import {darkMode, lightMode} from '../../theme/theme';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {isDarkMode} = useDarkMode(); // Get isDarkMode state from context
  const theme = isDarkMode ? darkMode : lightMode; // Get theme based on isDarkMode
  const [styles, setStyles] = useState(getStyles(theme));

  useEffect(() => {
    // Update styles when isDarkMode changes
    setStyles(getStyles(theme));
  }, [isDarkMode, theme]);

  const goToSettings = () => {
    navigation.navigate('Chat');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Apps</Text>
      <TouchableOpacity style={styles.button} onPress={goToSettings}>
        <Text style={styles.buttonText}>Start Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
