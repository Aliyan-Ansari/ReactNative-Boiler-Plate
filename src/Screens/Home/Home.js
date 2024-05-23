import React, {useEffect, useState} from 'react';
import {Skottie} from 'react-native-skottie';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getStyles} from './style';
import {useDarkMode} from '../../ThemeContext';
import LottieAnimationFile from '../../assets/chat.json';
import {darkMode, lightMode} from '../../theme/theme';
import Animated, {
  BounceIn,
  BounceInDown,
  BounceInUp,
  FadeInDown,
  FlipInEasyX,
  ReduceMotion,
  StretchInX,
  StretchInY,
  ZoomInEasyDown,
} from 'react-native-reanimated';

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
      <Animated.View entering={StretchInY.delay(300)}>
        <Skottie
          style={{width: 200, height: 200}}
          source={LottieAnimationFile}
          autoPlay={true}
        />
      </Animated.View>
      <Text style={styles.title}>Welcome to Your Apps</Text>
      <TouchableOpacity style={styles.button} onPress={goToSettings}>
        <Text style={styles.buttonText}>Start Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
